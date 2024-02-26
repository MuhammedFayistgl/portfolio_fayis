// import React from "react";

import { Formik, Field, Form, FormikHelpers } from "formik";
import { contactHelper } from "../../../utils/ContactHelper";
// import nodemailer from "nodemailer";

const FormContact = () => {
    interface Values {
        firstName: string;
        name: string;
        lastName: string;
        email: string;
        subject: string;
      }
	return    (
		<div className="php-email-form">
			<div className="row">
				<Formik
					initialValues={{
						firstName: "",
						name: "",
						lastName: "",
						email: "",
                        subject:''
					}}
					onSubmit={( values: Values,
                        { setSubmitting }: FormikHelpers<Values>) => {
                            setSubmitting(false)
                            contactHelper(values)
						// const transporter = nodemailer.createTransport({
						// 	service: "gmail",
						// 	auth: {
						// 		user: "muhammedfayisthangal@gmail.com",
						// 		pass: "qanpljdjpijpatkc",
						// 	},
						// });
						// transporter.sendMail(
						// 	{
						// 		from: "2muhammedfayisthangal@gmail.com", // sender address
						// 		to: `${values?.email}`, // list of receivers
						// 		subject: `Hello My name is  ${values?.name}`, // Subject line
						// 		text: `  ${values?.subject} `, // plain text body
						// 	},

						// 	(error, info) => {
						// 		if (error) {
						// 			console.log(error);
						// 		} else {
						// 			console.log(info.response);
						// 		}
						// 	}
						// );
					}
                }
				>
					<Form>
						<div className="col-md-12 mb-3">
							<div className="form-group">
								<Field type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
							</div>
						</div>
						<div className="col-md-12 mb-3">
							<div className="form-group">
								<Field type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
							</div>
						</div>
						<div className="col-md-12 mb-3">
							<div className="form-group">
								<Field type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
							</div>
						</div>
						<div className="col-md-12">
							<div className="form-group">
								<textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
							</div>
						</div>
						<div className="col-md-12 text-center my-3">
							<div className="loading">Loading</div>
							<div className="error-message"></div>
							<div className="sent-message">Your message has been sent. Thank you!</div>
						</div>
						<div className="col-md-12 text-center">
							<button type="submit" className="button button-a button-big button-rouded">
								Send Message
							</button>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default FormContact;
