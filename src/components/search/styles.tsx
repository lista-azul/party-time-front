import { createStyles, makeStyles } from "@mui/styles";
import palleteColorsCustom from "src/constants/palleteColors"


export const useSearchBarStyle = makeStyles(()=>
    createStyles({
        container:{
            display:"flex",
            alignItems:"center",
            justifyContent: "center"
        },
        noBorder: {
            border: "none",
        },
        input:{

        },
        buttonSearch:{
            border: `1px solid ${palleteColorsCustom.primary}`,
            backgroundColor:`${palleteColorsCustom.primary}`,
            color:"white",
            borderRadius:"20px",
            "&:hover":{
                color:`${palleteColorsCustom.primary}`
            }
        }
    })
)
