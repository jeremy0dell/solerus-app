import { compose, withState, withHandlers } from 'recompose'


/*

*/
export const formData = initialValues => compose(
  withState('form', 'updateState', initialValues),
  withHandlers({
    handleChange:
    props =>
    event =>
    props.updateState({ ...props.form, [event.target.name]: event.target.value }),
    handleUpload:
    props =>
    files =>
    props.updateState({ ...props.form, file: files[0] }),
  }),
)

// export const withFile = () => compose(
//   withState('file', 'updateFile', { file: null }),
//   withHandlers({
//     handleUpload:
//     props =>
//     accepted =>
//     props.updateFile({ file: accepted[0] }),
//   }),
// )
