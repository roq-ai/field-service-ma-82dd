import * as yup from 'yup';

export const scheduleValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().nullable(),
  status: yup.string().required(),
  engineer_id: yup.string().nullable().required(),
  activity_id: yup.string().nullable().required(),
});
