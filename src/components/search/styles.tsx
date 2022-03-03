import { createStyles, makeStyles } from "@mui/styles";
import { styled, Theme } from "@mui/system";


export const useSearchBarStyle = makeStyles((theme:Theme)=>
    createStyles({
        container:{
            display:"flex",
            alignItems:"center"
        },

    })
)