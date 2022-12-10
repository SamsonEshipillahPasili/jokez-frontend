import { Label, TextInput } from "flowbite-react";
import { useField } from "formik";

function AuthFormTextField({ label, ...props }: any) {
    const [fieldProps, metadata] = useField(props);
    return (
        <div className="space-y-2">
            <Label 
                htmlFor={props.name}
                value={label}
            />
            <TextInput {...props} {...fieldProps} />
            {metadata.error && metadata.touched ?  (<small className="text-red-600">{metadata.error}</small>) : null}
        </div>
    );
}

export default AuthFormTextField;