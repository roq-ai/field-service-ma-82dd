import * as yup from 'yup';

export const partsOrderValidationSchema = yup.object().shape({
  part_name: yup.string().required(),
  quantity: yup.number().integer().required(),
  status: yup.string().required(),
  activity_id: yup.string().nullable().required(),
});
