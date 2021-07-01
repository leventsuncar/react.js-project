import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import {
    Button,
    Form,
    Grid,
    Header,
    Segment,
    FormCheckbox
} from "semantic-ui-react";

import { useFormik } from "formik";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementForm() {

    let jobadvertisement = new JobAdvertisementService();
    const candidateRegisterSchema = Yup.object().shape({
        applicationDeadline: Yup.date().required("Alan Doldurulmalıdır"),
        cityName: Yup.string().required("Alan Doldurulmalıdır"),
        jobDescription: Yup.string().required("Alan Doldurulmalıdır"),
        employerCompanyName: Yup.string().required("Alan Doldurulmalıdır"),
        jobPositionName: Yup.string().required("Alan Doldurulmalıdır"),
        openPosition: Yup.number().required("Alan Doldurulmalıdır"),
        salary: Yup.number().required("Alan Doldurulmalıdır")


    });

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            applicationDeadline: "",
            cityName: "",
            jobDescription: "",
            employerCompanyName: "",
            jobPositionName: "",
            openPosition: "",
            salary: ""
        },
        validationSchema: candidateRegisterSchema,
        onSubmit: (values) => {
            console.log(values)
            jobadvertisement.addAdvertisement(values).then((result) => alert(result.data.message))
                .catch((result) => {
                    console.log(result)
                    alert(result.response.data.message)
                })
            history.push("/jobAdvertisements")
        }
    });

    

    return (
        <div>
            <Header as="h2" textAlign="center">
                İş İlanı Ekle
            </Header>
            <Form onSubmit={formik.handleSubmit}>
                <Segment inverted stacked>
                    <Grid stackable>
                        <Grid.Column width={8}>
                            <div style={{ marginTop: "1em" }}>
                                <label><b>Son Başvuru Tarihi</b></label>

                                <Form.Input
                                    fluid

                                    placeholder="Son Başvuru Tarihi"
                                    type="date"
                                    value={formik.values.applicationDeadline}
                                    name="applicationDeadline"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.applicationDeadline}
                                        </div>
                                    )
                                }
                            </div>
                            <div style={{ marginTop: "1em" }}>
                                <label><b>Şehir</b></label>
                                <Form.Input
                                    fluid

                                    placeholder="Şehir"
                                    type="text"
                                    value={formik.values.cityName}
                                    name="cityName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.cityName && formik.touched.cityName && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.cityName}
                                    </div>
                                )}
                            </div>
                            <div style={{ marginTop: "1em" }}>
                                <label><b>İş Tanımı</b></label>
                                <Form.Input
                                    fluid

                                    placeholder="İş Tanımı"
                                    type="text"
                                    value={formik.values.jobDescription}
                                    name="jobDescription"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.jobDescription && formik.touched.jobDescription && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.jobDescription}
                                    </div>
                                )}
                            </div>
                            <div style={{ marginTop: "1em" }}>
                                <label><b>Şirket Adı</b></label>
                                <Form.Input
                                    fluid

                                    placeholder="Şirket Adı"
                                    type="text"
                                    error={Boolean(formik.errors.employerCompanyName)}
                                    onChange={formik.handleChange}
                                    value={formik.values.employerCompanyName}
                                    onBlur={formik.handleBlur}
                                    name="employerCompanyName"
                                />
                                {formik.errors.employerCompanyName && formik.touched.employerCompanyName && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.employerCompanyName}
                                    </div>
                                )}
                            </div>
                        </Grid.Column>

                        <Grid.Column width={8}>
                            <div style={{ marginTop: "1em" }}>
                                <label><b>jobPositionName</b></label>
                                <Form.Input
                                    fluid

                                    placeholder="jobPositionName"
                                    type="text"
                                    value={formik.values.jobPositionName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="jobPositionName"
                                />
                                {formik.errors.jobPositionName && formik.touched.jobPositionName && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.jobPositionName}
                                    </div>
                                )}
                            </div>
                            <div style={{ marginTop: "1em" }}>
                                <label><b>openPosition</b></label>
                                <Form.Input
                                    fluid
                                    placeholder="openPosition"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="openPosition"
                                />
                                {formik.errors.openPosition && formik.touched.openPosition && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.openPosition}
                                    </div>
                                )}
                            </div>
                            <div style={{ marginTop: "1em" }}>
                                <label><b>salary</b></label>
                                <Form.Input
                                    fluid

                                    placeholder="salary"
                                    type="text"
                                    value={formik.values.salary}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="salary"
                                />
                                {formik.errors.salary && formik.touched.salary && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.salary}
                                    </div>
                                )}
                            </div>
                            <FormCheckbox label='I agree to the Terms and Conditions' />
                        </Grid.Column>
                    </Grid>

                    <br />
                    <Button inverted color="green" fluid size="large" type="submit">
                        Kayıt Ol
                    </Button>
                </Segment>
            </Form>
            
        </div>
    );
}