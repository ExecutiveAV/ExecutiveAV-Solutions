import { Document, Page, Text, View, StyleSheet, Font, } from 'react-pdf-browser';


import previous from '../dummyDB/previous';

//Importing fontFaimily
import GuillSansLightSource from '../assets/fonts/GillSans-Light.ttf'; 
import checkIfUndefined from '../utils/checkUndefined';

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
        marginLeft: "auto",
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
        paddingTop: "8px",
    },
    headers: {
        height: "32px",
        fontSize: "24px",
        fontWeight: "bold",
        paddingTop: "8px",
    },
    bodyTitle: {
        height: "40px",
        width: "100%",
        maxWidth: "100%",
        display: "inline-flex",
        flexDirection: "row",
        backgroundColor: "#808080",
        boxSizing: "border-box",
    },
    bodyTitleTitle: {
        display: "inline-block",
        color: "#fff",
        fontSize: "21px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "11px 0 0px 0px",
        flex: 1,
        marginTop: "1px",
    },
    shifts: {
        display: "inline-flex",
        flexDirection: "row",
        width: "100%",
        minHeight: "36px",
    },
    shiftGroup: {
        display: "flex",
        flexDirection: "column",
        flex: 6,
        minHeight: "36px",
    },
    category: {
        textAlign: "center",
        width: "100%",
        flex: 1,
        minHeight: "36px",
        height: "100%",
        display: "flex",
    },
    day: {
        display: "flex",
        flexDirection: "row",
        minHeight: "36px",
        width: "100%",
        height: "auto"
    },
    dayGroup: {
        display: "inline-flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "36px",
        height: "auto",
    },
    tech: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        minHeight: "36px",
        
    },
    shift: {
        display: "inline-flex",
        flex: 6,
    },
    dayNumber: {
        flex: 1,
    },
    date: {
        flex: 1,
    },
    all: {
        minWidth: "474px",
        width: "100%",
        flex: 6
    },
    allTitle: {
        display: "inline-flex",
        flexDirection: "row",
        flex: 6,
    },
    techsTitle: {
        flex: 6,
        display: "flex",
        flexDirection: "row"
    },
    techSpacing: {
        flex: 2,
        display: "inline-block",
    },
    categoryField: {
        fontSize: "18px",
        minHeight: "36px",
        padding: "9px 0 0px 0px",
        width: "100%",
        height: "36px",
        margin: "auto"
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
const SchedulePDF = ({ schedule }) => {

    // const schedule = {
    //     invNumber: '71',
    //     company: 'BluebirdMP',
    //     location: 'The Breakers',
    //     daysData: [
    //       {
    //         date: '2022-09-07',
    //         shifts: [
    //           {
    //             timeIn: '',
    //             timeOut: '',
    //             guys: [
    //               {
    //                 name: '',
    //                 position: '',
    //                 walkaway: true,
    //                 timeIn: '',
    //                 timeOut: ''
    //               },
    //               {
    //                 name: '',
    //                 position: '',
    //                 walkaway: true,
    //                 timeIn: '',
    //                 timeOut: ''
    //               },
    //               {
    //                 name: '',
    //                 position: '',
    //                 walkaway: true,
    //                 timeIn: '',
    //                 timeOut: ''
    //               },
    //             ]
    //           },
    //           {
    //             timeIn: '',
    //             timeOut: '',
    //             guys: [
    //                 {
    //                     name: '',
    //                     position: '',
    //                     walkaway: true,
    //                     timeIn: '',
    //                     timeOut: ''
    //                 },
    //             ]
    //           }
    //         ]
    //       },{
    //         date: '2022-09-07',
    //         shifts: [
    //           {
    //             timeIn: '',
    //             timeOut: '',
    //             guys: [
    //               {
    //                 name: '',
    //                 position: '',
    //                 walkaway: true,
    //                 timeIn: '',
    //                 timeOut: ''
    //               },
    //               {
    //                 name: '',
    //                 position: '',
    //                 walkaway: true,
    //                 timeIn: '',
    //                 timeOut: ''
    //               },
    //               {
    //                 name: '',
    //                 position: '',
    //                 walkaway: true,
    //                 timeIn: '',
    //                 timeOut: ''
    //               },
    //             ]
    //           },
    //           {
    //             timeIn: '',
    //             timeOut: '',
    //             guys: [
    //                 {
    //                     name: '',
    //                     position: '',
    //                     walkaway: true,
    //                     timeIn: '',
    //                     timeOut: ''
    //                 },
    //             ]
    //           }
    //         ]
    //       },{
    //         date: '2022-09-07',
    //         shifts: [
    //           {
    //             timeIn: '',
    //             timeOut: '',
    //             guys: [
    //               {
    //                 name: '',
    //                 position: '',
    //                 walkaway: true,
    //                 timeIn: '',
    //                 timeOut: ''
    //               },
    //               {
    //                 name: '',
    //                 position: '',
    //                 walkaway: true,
    //                 timeIn: '',
    //                 timeOut: ''
    //               },
    //               {
    //                 name: '',
    //                 position: '',
    //                 walkaway: true,
    //                 timeIn: '',
    //                 timeOut: ''
    //               },
    //             ]
    //           },
    //           {
    //             timeIn: '',
    //             timeOut: '',
    //             guys: [
    //                 {
    //                     name: '',
    //                     position: '',
    //                     walkaway: true,
    //                     timeIn: '',
    //                     timeOut: ''
    //                 },
    //             ]
    //           }
    //         ]
    //       }
    //     ]
    // }

    //Handles Address formatting
    let address = "";
    let city = "";

    const setAddress = (location) => {
        previous.venue.forEach(venue => {
            if (venue.name === location) {
                address = venue.street;
                city = venue.city;
            }
        });
    }

    checkIfUndefined(schedule.location, setAddress);

    const formatTime = time => {
        let formatTime = time.split(":");
        let meridian = "";
        let hour = formatTime[0];
        if (hour > 11) {
            meridian = " PM";
            if (hour > 12) {
                hour = hour - 12;
            }
        } else {
            meridian = " AM";
        }
        formatTime[0] = hour
        formatTime = formatTime.join(":");
        formatTime = formatTime.concat(meridian);
        return formatTime;
    }

    //Techs View
    const buildGuys = (techs, hasTopBorder) => {
        let techsArray = [];
        techs.forEach(tech => {
            techsArray.push(
                        <View style={styles.tech} >
                            <View style={[styles.category]} >
                                <Text style={[styles.categoryField]} >{tech.position}</Text>
                            </View>
                            <View style={[styles.category, styles.techSpacing ]} >
                                <Text style={[styles.categoryField]} >{tech.name}</Text>
                            </View>
                            <View style={[styles.category, styles.techSpacing ]} >
                                <Text style={[styles.categoryField]} >{`${formatTime(tech.timeIn)} - ${formatTime(tech.timeOut)}`}</Text>
                            </View>
                            <View style={[styles.category ]} >
                                <Text style={[styles.categoryField]} >{`${parseInt(tech.timeOut.slice(0, 2)) - parseInt(tech.timeIn.slice(0, 2))}`}</Text>
                            </View>
                        </View>
                );
        });
        return techsArray;
    };

    //Shifts View
    const buildShifts = (shifts) => {
        let shiftsArray = [];
        for (let i = 0; i < shifts.length; i++) {
            let guysQty = shifts[i].guys.length;
            if (guysQty === 0) {
                guysQty = 1;
            }
            if (i === 0) {
                shiftsArray.push(
                    <View style={[styles.shifts, {height: `${guysQty * 36}px`, } ]} >
                        <View style={[styles.category, ]} >
                            <Text style={styles.categoryField} >{shifts[i].guys.length}</Text>
                        </View>
                        <View style={[styles.shift, ]} >
                            {
                                buildGuys(shifts[i].guys, false)
                            }
                        </View>
                    </View>
                );
            } else {
                shiftsArray.push(
                    <View style={[styles.shifts, styles.hasBorder,  {height: `${guysQty * 36}px`, } ]} >
                        <View style={[styles.category ]} >
                            <Text style={[styles.categoryField]} >{shifts[i].guys.length}</Text>
                        </View>
                        <View style={[styles.shift, ]} >
                            {
                                buildGuys(shifts[i].guys, true)
                            }
                        </View>
                    </View>
                );
            };
        };
        return shiftsArray;
    };

    //Days View |._.||.-.|
    const buildDays = (days) => {
        let daysArray = [];
        for (let i = 0; i < days.length; i++) {
            let totalAmountOfGuys = days[i].shifts.reduce(
                (previousValue, shift) => {
                    let guysQty = 0;
                    if (shift.guys.length === 0) {
                        guysQty = 1;
                    } else {
                        guysQty = shift.guys.length;
                    }
                    return (previousValue + guysQty);
                },
                0
            );
            daysArray.push(
                <View style={styles.dayGroup} wrap={false} >
                    <View style={[styles.day, {height: `${36 * totalAmountOfGuys}`,}]} >
                        <View style={[styles.category, styles.dayNumber]} >
                            <Text style={styles.categoryField} >{i+1}</Text>
                        </View>
                        <View style={[styles.category, styles.date]} >
                            <Text style={styles.categoryField} >{new Date(days[i].date.replace(/-/g, '/')).toLocaleDateString('en-us')}</Text>
                        </View>
                        <View style={styles.shiftGroup} >
                        {/* Flex Direction: Column */}
                            {
                                buildShifts(days[i].shifts)
                            }
                        </View>
                    </View>
                    <View style={styles.bumper} ></View>
                </View>
            );
        };
        return daysArray;
    };

    //Main Body
    return (
        <Document>
            <Page size="A4" style={styles.page} orientation="landscape" >
            {/* Header */}
                <View style={styles.section}>
                    <Text style={styles.headerTitle} >{schedule.company}</Text>
                    <Text style={styles.headers} >{`#2222_${schedule.invNumber}`}</Text>
                    <Text style={styles.headers} >{schedule.location}</Text>
                    <Text style={styles.headers} >{address}</Text>
                    <Text style={styles.headers} >{city}</Text>
                </View>
                {/* Titles */}
                <View style={styles.bodyTitle} >
                    <Text style={[styles.bodyTitleTitle, styles.dayNumber]} >Day</Text>
                    <Text style={[styles.bodyTitleTitle, styles.date]} >Date</Text>
                    <View style={styles.allTitle} >
                        <Text style={[styles.bodyTitleTitle, ]} >Qty</Text>
                        <View style={styles.techsTitle} >
                            <Text style={[styles.bodyTitleTitle, ]} >Position</Text>
                            <Text style={[styles.bodyTitleTitle, styles.techSpacing ]} >Tech</Text>
                            <Text style={[styles.bodyTitleTitle, styles.techSpacing ]} >Time</Text>
                            <Text style={[styles.bodyTitleTitle, ]} >Hrs</Text>
                        </View>
                    </View>
                </View>
                {/* Body */}
                {
                    checkIfUndefined(schedule.daysData, buildDays)
                }
            </Page>
        </Document>
    )
};

export default SchedulePDF;