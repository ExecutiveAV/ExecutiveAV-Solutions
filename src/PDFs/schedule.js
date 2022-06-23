import { Document, Page, Text, View, StyleSheet, Font } from 'react-pdf-browser';

//Importing fontFaimily
import GuillSansLightSource from '../../assets/fonts/GillSans-Light.ttf'; 

//Registering fontFamily to the PDF creator
Font.register({ family: "GillSans", src: GuillSansLightSource });

//PDF style sheet
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        height: "100%",
        fontFamily : 'GillSans',
    },
    section: {
        margin: "10px",
        padding: "0px",
        flexGrow: 0,
        border: "solid 2px yellow",
    },
    headerTitle: {
        width: "164px",
        height: "32px",
        color: "#fff",
        backgroundColor: "#808080",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "left",
        padding: "8px 0 0px 1px"
    },
    headers: {
        height: "32px",
        fontSize: "24px",
        fontWeight: "bold",
        padding: "8px 0 0px 1px"
    },
    bodyTitle: {
        height: "40px",
        width: "18.59cm",
        maxWidth: "100%",
        display: "inline-flex",
        flexDirection: "row",
        backgroundColor: "#808080",
        margin: "0px 0px 0px 10px",
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
        width: "1.45cm",
    },
    m: {
        width: "2.43cm",
    },
    l: {
        width: "4.69cm",
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
        width: "18.59cm",
        maxWidth: "100%",
        height: "8px",
        backgroundColor: "#808080",
        margin: "0 10px 0 10px",
    }
});

//Schedule PDF Builder
const SchedulePDF = () => (
<Document>
    <Page size="A4" style={styles.page} orientation="landscape" >
    <View style={styles.section}>
        <Text style={styles.headerTitle} >Bluebird </Text>
        <Text style={styles.headers} >#2222_69</Text>
        <Text style={styles.headers} >Hyatt Regency</Text>
        <Text style={styles.headers} >69 Ave 420 St</Text>
        <Text style={styles.headers} >Miami, FL </Text>
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
                <Text style={styles.categoryField} >1</Text>
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
);

export default SchedulePDF;