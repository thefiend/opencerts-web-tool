module.exports = {
  schema: {
    title: "Certification Creation Form",
    description:
      "This is the same as the simple form, but it is rendered as a bootstrap grid. Try shrinking the browser window to see it in action.",
    $id: "opencerts/v1.5",
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      $template: {
        type: "string",
      },
      name: {
        type: "string",
      },
      description: {
        type: "string",
      },
      issuedOn: {
        description:
          "The date that this certificate was issued by the issuer(s)",
        type: "string",
        format: "date-time",
      },
      expiresOn: {
        type: "string",
        format: "date-time",
      },
      admissionDate: {
        type: "string",
        format: "date-time",
      },
      graduationDate: {
        description: "The date that this student graduated from the course",
        type: "string",
        format: "date-time",
      },
      attainmentDate: {
        description:
          "The date that this qualification was awarded to the recipient",
        type: "string",
        format: "date-time",
      },
      // "qualificationLevel": {
      //   "type": "array",
      //   "description": "This is an array of objects used to attach descriptors from frameworks such as Singapore's SSEC-EQA or the internationally recognised ISCED. Multiple instances are allowed to indicate either equivalents or to indicate a multi-level qualifications",
      //   "items": {
      //     "type": "object",
      //     "required": [
      //       "frameworkName",
      //       "frameworkVersion",
      //       "code",
      //       "description"
      //     ],
      //     "properties": {
      //       "frameworkName": {
      //         "type": "string",
      //         "examples": ["singapore/ssec-eqa", "international/isced"]
      //       },
      //       "frameworkVersion": {
      //         "type": "string",
      //         "examples": ["2015", "2011"]
      //       },
      //       "code": {
      //         "type": "string",
      //         "examples": ["51", "55"]
      //       },
      //       "description": {
      //         "type": "string",
      //         "examples": [
      //           "Polytechnic Diploma",
      //           "(Short-cycle tertiary education) Vocational"
      //         ]
      //       }
      //     }
      //   }
      // },
      // "fieldOfStudy": {
      //   "type": "array",
      //   "description": "This is an array of objects used to attach descriptors from frameworks such as Singapore's SSEC-FOS or the internationally recognised ISCED-F. Multiple instances are allowed to indicate either equivalents or to indicate a multi-field qualification such as double degrees",
      //   "items": {
      //     "type": "object",
      //     "required": [
      //       "frameworkName",
      //       "frameworkVersion",
      //       "code",
      //       "description"
      //     ],
      //     "properties": {
      //       "frameworkName": {
      //         "type": "string",
      //         "description": "Prepend the actual framework name with the scope of the framework",
      //         "examples": ["singapore/ssec-fos", "international/isced-f"]
      //       },
      //       "frameworkVersion": {
      //         "type": "string",
      //         "examples": ["2015", "2013"]
      //       },
      //       "code": {
      //         "type": "string",
      //         "examples": ["0897"]
      //       },
      //       "description": {
      //         "type": "string",
      //         "examples": ["Biomedical Science"]
      //       }
      //     }
      //   }
      // },
      // "cumulativeScore": {
      //   "type": "number"
      // },
      // "issuers": {
      //   "type": "array",
      //   "items": {
      //     "type": "object",
      //     "properties": {
      //       "name": {
      //         "type": "string"
      //       },
      //       "did": {
      //         "type": "string"
      //       },
      //       "url": {
      //         "type": "string",
      //         "format": "url"
      //       },
      //       "email": {
      //         "type": "string",
      //         "format": "email"
      //       },
      //       "phone": {
      //         "type": "string"
      //       },
      //       "certificateStore": {
      //         "type": "string"
      //       }
      //     },
      //     "required": ["name", "certificateStore"],
      //     "additionalProperties": true
      //   },
      //   "minItems": 1
      // },
      issuers: {
        title: "Issuers",
        type: "array",
        items: [
          {
            title: "Primary Issuer",
            $ref: "#/definitions/issuer",
          },
        ],
        additionalItems: {
          title: "Additional Issuer",
          $ref: "#/definitions/issuer",
        },
        minItems: 1,
      },
      recipient: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          did: {
            type: "string",
          },
          url: {
            type: "string",
            format: "uri",
          },
          email: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          nric: {
            type: "string",
          },
          fin: {
            type: "string",
          },
          studentId: {
            type: "string",
          },
        },
        required: ["name"],
        additionalProperties: true,
      },
      // "transcript": {
      //   "type": "array",
      //   "items": {
      //     "type": "object",
      //     "properties": {
      //       "name": {
      //         "type": "string"
      //       },
      //       "score": {
      //         "type": ["number", "string"]
      //       },
      //       "grade": {
      //         "type": ["number", "string"]
      //       },
      //       "courseCredit": {
      //         "type": ["number", "string"]
      //       },
      //       "courseCode": {
      //         "type": "string"
      //       },
      //       "examinationDate": {
      //         "type": "string",
      //         "format": "date-time"
      //       },
      //       "url": {
      //         "type": "string"
      //       },
      //       "description": {
      //         "type": "string"
      //       },
      //       "languageMedium": {
      //         "description": "Language that the course was undertaken in",
      //         "type": "string"
      //       }
      //     },
      //     "required": ["name"]
      //   }
      // },
      // "additionalData": {
      //   "type": "object"
      // }
    },
    definitions: {
      issuer: {
        title: "Issuer",
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          did: {
            type: "string",
          },
          url: {
            type: "string",
            format: "uri",
          },
          email: {
            type: "string",
            format: "email",
          },
          phone: {
            type: "string",
          },
          certificateStore: {
            type: "string",
          },
        },
        required: ["name", "certificateStore"],
      },
    },
    required: ["id", "name", "issuedOn", "issuers", "recipient"],
    additionalProperties: true,
  },
  uiSchema: {
    id: {
      "ui:title": "Certificate ID",
      "ui:autofocus": true,
      "ui:help": "Hint: Must be unique!",
    },
    $template: {
      "ui:title": "Certification Template",
      "ui:widget": "text",
    },
    name: {
      "ui:title": "Name of Certificate",
      "ui:widget": "text",
    },
    description: {
      "ui:widget": "text",
      "ui:title": "Description",
    },
    issuedOn: {
      "ui:title": "Issued On",
      "ui:widget": "alt-datetime",
      "ui:options": {
        hideClearButton: true,
      },
    },
    expiresOn: {
      "ui:title": "Expires On",
      "ui:widget": "alt-datetime",
      "ui:options": {
        hideClearButton: true,
      },
    },
    admissionDate: {
      "ui:title": "Admission Date",
      "ui:widget": "alt-datetime",
      "ui:options": {
        hideClearButton: true,
      },
    },
    graduationDate: {
      "ui:title": "Graduation Date",
      "ui:help": "The date that this student graduated from the course",
      "ui:widget": "alt-datetime",
      "ui:options": {
        hideClearButton: true,
      },
    },
    attainmentDate: {
      "ui:title": "Attainment Date",
      "ui:help":
        "The date that this qualification was awarded to the recipient",
      "ui:widget": "alt-datetime",
      "ui:options": {
        hideClearButton: true,
      },
    },
    issuers: {
      items: {
        name: {
          "ui:title": "Name",
          "ui:widget": "text",
        },
        did: {
          "ui:title": "DID",
          "ui:widget": "text",
        },
        url: {
          "ui:title": "Website URL",
          "ui:widget": "text",
        },
        email: {
          "ui:title": "Email Address",
          "ui:widget": "text",
          "ui:options": {
            inputType: "email",
          },
        },
        phone: {
          "ui:title": "Contact Number",
          "ui:widget": "text",
          "ui:options": {
            inputType: "tel",
          },
        },
        certificateStore: {
          "ui:title": "Certificate Store",
          "ui:widget": "text",
        },
      },
      additionalItems: {
        name: {
          "ui:title": "Name",
          "ui:widget": "text",
        },
        did: {
          "ui:title": "DID",
          "ui:widget": "text",
        },
        url: {
          "ui:title": "Website URL",
          "ui:widget": "text",
        },
        email: {
          "ui:title": "Email Address",
          "ui:widget": "text",
          "ui:options": {
            inputType: "email",
          },
        },
        phone: {
          "ui:title": "Contact Number",
          "ui:widget": "text",
          "ui:options": {
            inputType: "tel",
          },
        },
        certificateStore: {
          "ui:title": "Certificate Store",
          "ui:widget": "text",
        },
      },
    },
    recipient: {
      "ui:title": "Recipient",
      type: "object",
      did: {
        "ui:title": "ID",
        "ui:widget": "text",
      },
      name: {
        "ui:title": "Name",
        "ui:widget": "text",
      },
      url: {
        "ui:title": "URL",
        "ui:widget": "text",
        "ui:help": "Format: https://www.opencerts.io",
      },
      email: {
        "ui:title": "Email",
        "ui:widget": "text",
        "ui:options": {
          inputType: "email",
        },
      },
      phone: {
        "ui:title": "Contact Number",
        "ui:widget": "text",
        "ui:options": {
          inputType: "tel",
        },
      },
      nric: {
        "ui:title": "NRIC",
        "ui:widget": "text",
      },
      fin: {
        "ui:title": "FIN Number",
        "ui:widget": "text",
      },
      studentId: {
        "ui:title": "Student ID",
        "ui:widget": "text",
      },
      required: ["name"],
      additionalProperties: true,
    },
  },
  formData: {
    id: "2018091259",
    name: "Bachelor of Blockchain",
    issuedOn: "2018-08-31T23:59:32+08:00",

    issuers: [
      {
        name: "Test",
        url: "https://universityofblockchain.com",
        certificateStore: "0xa075988cf0e9dd24A56CbDF521845fCf4bE25EA3",
      },
    ],

    recipient: {
      name: "John Snow",
      email: "johnsnow@gmail.com",
      phone: "+6588888888",
    },

    // "transcript":[{
    //   "name":"History of Blockchain",
    //   "grade":"B+",
    //   "courseCredit":3,
    //   "courseCode":"HIST-BTC",
    //   "url":"https://universityofblockchain.com/sub/hist-btc",
    //   "description":"Understanding the origins of the blockchain."
    // },{
    //   "name":"Ethereum Smart Contracts",
    //   "grade":"A",
    //   "courseCredit":3,
    //   "courseCode":"ETH-SC",
    //   "url":"https://universityofblockchain.com/sub/eth-sc",
    //   "description":"Understanding how to write smart contracts on the Ethereum network."
    // }],
    // "additionalData": {
    //   "signature":"data:image/jpeg;base64...."
    // }
  },
};
