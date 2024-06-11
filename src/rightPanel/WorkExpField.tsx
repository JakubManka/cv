import {CardContent, List, ListItem, Typography} from "@mui/material";
import React, {FC} from "react";
import {InfoCard} from "../styles/CustomStyles";
import {mainTheme} from "../Theme";

interface WorkExpFieldProps {
    header: string;
    date: string;
    projects: string[];
}

interface ProjectFieldProps {

}

const WorkExpField: FC<WorkExpFieldProps> = ({header, projects, date}) => {
    return (
        <InfoCard>
            <CardContent sx={{
                backgroundColor: mainTheme.palette.grey["50"],
            }}>
                <Typography variant="h6" pt={1}>
                    {header}
                </Typography>
                <Typography variant="body2">{date}</Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body1">Projects I worked on:</Typography>
                <List sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"left"
                }}>
                    {projects.map((project, index) => (
                        <ListItem key={index} sx={{textAlign: "left"}}>
                            <Typography variant="body1">{project}</Typography>
                        </ListItem>
                    ))
                    }
                </List>
            </CardContent>
        </InfoCard>
    )
}

export default WorkExpField;