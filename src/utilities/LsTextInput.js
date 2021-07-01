import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'
export default function LsTextInput({ ...props }) {
    const [field, meta] = useField(props)
    console.log(field)
    return (
        <div>
            
            <FormField style = {{margin: "0.5em"}} error={meta.touched && !!meta.error}  >
                <input name = {field.name} {...field} {...props} />
                {meta.touched && !!meta.error ?
                    (<Label pointing basic color="red" content={meta.error}></Label>
                    ) : null}
            </FormField>
        </div>
    )
}
