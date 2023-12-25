import * as Yup from 'yup';

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  Yup.object().shape({
    money: Yup.string().required("This field is required"),
    address: Yup.string()
      .min(32, "Too Short!")
      // .max(45, "Too Long!")
      .required("This field is required"),
    investmentamount: Yup.number()
      .min(1, "Too Short!")
      // .max(100, "Too Long!")
      .required("This field is required"),
    investmentdate: Yup.date().required("This field is required"),
    // valuation: Yup.bool().oneOf([true], "This field is required"),
    valuationcapnumber: Yup.number().min(0, "Too Short!").integer(),
    // discount: Yup.bool().oneOf([true], "This field is required"),
    discountnumber: Yup.number().min(0, "Too Short!").max(100, "Too Long!"),
    // prorate: Yup.bool().oneOf([true], "This field is required"),
    // favoured: Yup.bool().oneOf([true], "This field is required"),
  }),
  Yup.object().shape({
    companylegalname: Yup.string().required("This field is required"),
    companyaddress: Yup.string().required("This field is required"),
    companyaddress: Yup.string().required("This field is required"),
    country: Yup.string().required("This field is required"),
    state: Yup.string().required("This field is required"),
    benificial: Yup.string().required("This field is required"),
    benificialowner: Yup.string().required("This field is required"),
  }),
  Yup.object().shape({
    investortype: Yup.string().required(),
    investorlegal: Yup.string().required(),
    authorized: Yup.string().required(),
    signatory: Yup.string(),
    addressoptional: Yup.string(),
    bylines: Yup.string(),
  }),
];
