import * as yup from 'yup';

export const activityValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  status: yup.string().required(),
  service_request_id: yup.string().nullable().required(),
  engineer_id: yup.string().nullable().required(),
});
