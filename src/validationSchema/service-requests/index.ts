import * as yup from 'yup';

export const serviceRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  problem_description: yup.string().required(),
  solution_description: yup.string().nullable(),
  organization_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
