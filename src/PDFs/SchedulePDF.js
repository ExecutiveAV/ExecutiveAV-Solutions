import { Document, Page, Text, View, StyleSheet, Font, } from 'react-pdf-browser';


import previous from '../dummyDB/previous';

//Importing fontFaimily
import GuillSansLightSource from '../assets/fonts/GillSans-Light.ttf'; 

//Registering fontFamily to the PDF creator
Font.register({ family: "GillSans", src: GuillSansLightSource });

//PDF style sheet
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        width: "100%",
        height: "100%",
        fontFamily : 'GillSans',
        padding: "0px 42px 0px 42px",
    },
    section: {
        marginTop: "10px",
        padding: "0px",
        flexGrow: 0,
    },
    headerTitle: {
        width: "164px",
        height: "32px",
        color: "#fff",
        backgroundColor: "#808080",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "left",
    },
    headers: {
        height: "32px",
        fontSize: "24px",
        fontWeight: "bold",
    },
    bodyTitle: {
        height: "40px",
        width: "100%",
        maxWidth: "100%",
        display: "inline-flex",
        flexDirection: "row",
        backgroundColor: "#808080",
        boxSizing: "border-box"
    },
    bodyTitleTitle: {
        display: "inline-block",
        color: "#fff",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "11px 0 0px 0px",
    },
    category: {
        display: "inline-flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "space-around",
    },
    day: {
        display: "inline-flex",
        flexDirection: "row",
        padding: "0 10px 0 10px",
        minHeight: "36px",
    },
    days: {
        display: "flex",
        maxWidth: "100%",
        flexDirection: "column",
        padding: "0 10px 0 10px",
    },
    s: {
        minWidth: "1.45cm",
        width: "100%",
    },
    m: {
        minWidth: "2.43cm",
        width: "100%",
    },
    l: {
        minWidth: "5.69cm",
        width: "100%",
    },
    categoryField: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        fontSize: "18px",
        minHeight: "36px",
        maxHeight: "36px",
        padding: "9px 0 0px 0px",
        width: "100%",
    },
    hasBorder: {
        borderTopWidth: 1,
    },
    bumper: {
        width: "100%",
        maxWidth: "100%",
        height: "8px",
        backgroundColor: "#808080",
    }
});

//Schedule PDF Builder
const SchedulePDF = () => {

    const schedule = {
        invNumber: '70',
        company: 'Show Services',
        location: 'The Breakers',
        daysData: [
          {
            date: '2022-08-04',
            shifts: [
              {
                timeIn: '10:00',
                timeOut: '20:00',
                guys: [
                  {
                    name: 'Marco Calle',
                    position: 'Lead',
                    walkaway: true,
                    timeIn: '10:00',
                    timeOut: '20:00'
                  }
                ]
              }
            ]
          }
        ]
    }

    let address = "";
    let city = "";

    previous.venue.forEach(venue => {
        if (venue.name === schedule.location) {
            address = venue.street;
            city = venue.city;
        }
    });
    
    return (
    
    <Document>
        <Page size="A4" style={styles.page} orientation="landscape" >
            <View style={styles.section}>
                <Text style={styles.headerTitle} >{schedule.company}</Text>
                <Text style={styles.headers} >{`#2222_${schedule.invNumber}`}</Text>
                <Text style={styles.headers} >{schedule.location}</Text>
                <Text style={styles.headers} >{address}</Text>
                <Text style={styles.headers} >{city}</Text>
            </View>
            <View style={styles.bodyTitle} >
                <Text style={[styles.bodyTitleTitle, styles.s]} >Day</Text>
                <Text style={[styles.bodyTitleTitle, styles.m]} >Date</Text>
                <Text style={[styles.bodyTitleTitle, styles.s]} >Qty</Text>
                <Text style={[styles.bodyTitleTitle, styles.m]} >Position</Text>
                <Text style={[styles.bodyTitleTitle, styles.l]} >Tech</Text>
                <Text style={[styles.bodyTitleTitle, styles.l]} >Time</Text>
                <Text style={[styles.bodyTitleTitle, styles.s]} >Hrs</Text>
            </View>
            <View >
                <View style={styles.day} >
                    <View style={[styles.category, styles.s]} >
                        <Text style={styles.categoryField} >10</Text>
                    </View>
                    <View style={[styles.category, styles.m]} >
                        <Text style={styles.categoryField} >06/06/22</Text>
                    </View>
                    <View style={[styles.category, styles.s]} >
                        <Text style={styles.categoryField} >1</Text>
                        <Text style={[styles.categoryField, styles.hasBorder]} >1</Text>
                    </View>
                    <View style={[styles.category, styles.m]} >
                        <Text style={styles.categoryField} >Tech</Text>
                        <Text style={[styles.categoryField, styles.hasBorder]} >Tech</Text>
                    </View>
                    <View style={[styles.category, styles.l]} >
                        <Text style={styles.categoryField} >Alejandro Baldwin</Text>
                        <Text style={[styles.categoryField, styles.hasBorder]} >Alejandro Labanino</Text>
                    </View>
                    <View style={[styles.category, styles.l]} >
                        <Text style={styles.categoryField} >6am - 4pm</Text>
                        <Text style={[styles.categoryField, styles.hasBorder]} >6am - 4pm</Text>
                    </View>
                    <View style={[styles.category, styles.s]} >
                        <Text style={styles.categoryField} >10</Text>
                        <Text style={[styles.categoryField, styles.hasBorder]} >10</Text>
                    </View>
                </View>
                <View style={styles.bumper} ></View><View style={styles.day} >
                    <View style={[styles.category, styles.s]} >
                        <Text style={styles.categoryField} >2</Text>
                    </View>
                    <View style={[styles.category, styles.m]} >
                        <Text style={styles.categoryField} >06/06/22</Text>
                    </View>
                    <View style={[styles.category, styles.s]} >
                        <Text style={styles.categoryField} >1</Text>
                        <Text style={[styles.categoryField, styles.hasBorder]} >1</Text>
                    </View>
                    <View style={[styles.category, styles.m]} >
                        <Text style={styles.categoryField} >Tech</Text>
                        <Text style={[styles.categoryField, styles.hasBorder]} >Tech</Text>
                    </View>
                    <View style={[styles.category, styles.l]} >
                        <Text style={styles.categoryField} >Alejandro Baldwin</Text>
                        <Text wrap={false} style={[styles.categoryField, styles.hasBorder]} >Alejandro Labanino</Text>
                    </View>
                    <View style={[styles.category, styles.l]} >
                        <Text style={styles.categoryField} >6am - 4pm</Text>
                        <Text style={[styles.categoryField, styles.hasBorder]} >6am - 4pm</Text>
                    </View>
                    <View style={[styles.category, styles.s]} >
                        <Text style={styles.categoryField} >10</Text>
                        <Text style={[styles.categoryField, styles.hasBorder]} >10</Text>
                    </View>
                </View>
                <View style={styles.bumper} ></View>
            </View>
        </Page>
    </Document>
)};

export default SchedulePDF;