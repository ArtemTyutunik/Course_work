import {Button} from "@mui/material";

const AddButton = (props) => {
    return (
        <Button variant={"contained"}  sx={{backgroundColor: 'green', mt: '10px'}} onClick={props.onClick}>Add {props.item}</Button>
    )
}

export default AddButton;
