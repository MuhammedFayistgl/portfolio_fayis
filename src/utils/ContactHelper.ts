
// import nodemailer from "nodemailer"

interface valusProps {
    email: string
    firstName: string
    lastName: string
    name: string
    subject: string
}
export const contactHelper = (values: valusProps) => {

    console.log(values);
    // const transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //         user: "muhammedfayisthangal@gmail.com",
    //         pass: "qanpljdjpijpatkc",
    //     },
    // });
    // transporter.sendMail(
    //     {
    //         from: "2muhammedfayisthangal@gmail.com", // sender address
    //         to: `${values?.email}`, // list of receivers
    //         subject: `Hello My name is  ${values?.name}`, // Subject line
    //         text: `  ${values?.subject} `, // plain text body
    //     },

    //     (error, info) => {
    //         if (error) {
    //             console.log(error);
    //         } else {
    //             console.log(info.response);
    //         }
    //     }
    // );
}

