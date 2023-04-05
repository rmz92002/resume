import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import image_profile from '../Images/Asunto.png'
import WhatIDo from '../components/WhatIDo';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: 275,
        background: "white",
        color: 'black',
        justifyContent: "space-evenly",
        height: 600,
        alignItems: 'center'
    },
    media: {
        display: 'flex',
        height: 400,
        borderRadius: 200,
        borderWidth: 20,
        borderColor: 'black',
        boxShadow: "3px 2px 2px #eee"
    },
    bodyhome: {
        paddingRight: 10,
        fontSize: 25,
        textAlign: 'center',
        padding: 30,
        width: 500,
        opacity: 0.7
    }
});

export default function Home() {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardContent style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography variant="h8" component="h2" style={{ textAlign: 'center', color: "black", fontSize: 70, fontWeight: '500', color: "grey" }}>
                        Santiago Ramirez
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.bodyhome}>
                        I am a student at UC Berkeley pursuing a degree in Computer Science and Data Science.
                        I am a Software Engineer and hope to launch my own startup in the future.
                    </Typography>
                </CardContent>
                <img
                    src={image_profile}
                    className={classes.media}
                    title="Your Photo"
                />
            </Card>
            <WhatIDo />
        </>
    );
}
