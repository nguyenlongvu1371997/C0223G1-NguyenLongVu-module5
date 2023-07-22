import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";

export default function MedicalDeclaration() {
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          citizenId: "",
          dayOfBirth: "",
          gender: "",
          country: "",
          company: "",
          position: "",
          medicalInsurance: "",
          province: "",
          district: "",
          ward: "",
          address: "",
          phone: "",
          email: "",
        }}

        validationSchema={{
          fullName: yup.string().required("họ tên không được để trống"),
          citizenId: yup.string().required("CCCD không được để trống"),
          yearOfBirth: yup.string().required("ngày tháng năm sinh không dược để trống").
            matches(/^(19[0-9]{2}|[2-9][0-9]{3})+$/, "năm sinh phải lớn hơn 1900"),
          country: yup.string().required("quốc tịch không được để trống"),
          province: yup.string().required("tỉnh thành không được để trống"),
          district: yup.string().required("phường/xã không được để trống"),
          ward: yup.string().required("phường, xã không được để trống"),
          address: yup.string().required("địa chỉ không được để trống"),
          phone: yup.string().required("số điện thoại không được để trống"),
          email: yup.string().required("email không được để trống").
            matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, "Invalid email address"),
        }}

        onSubmit={() => {
          alert("khai báo thành công");
        }}
      >

        <Form>
          <div>
            <label htmlFor="fullName">Họ và tên: </label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage component="div" name="fullName" className="text-red" />
          </div>

          <div>
            <label htmlFor="citizenId">CCCD: </label>
            <Field type="text" id="citizenId" name="citizenId" />
            <ErrorMessage component="div" name="citizenId" className="text-red" />
          </div>

          <div>
            <label htmlFor="yearOfBirth">Năm sinh: </label>
            <Field type="text" id="yearOfBirth" name="yearOfBirth" />
            <ErrorMessage component="div" name="yearOfBirth" className="text-red" />
          </div>

          <div>
            <label htmlFor="gender">Giới tính: </label>
            <label >
              <Field type="radio" id="male" name="gender" value="male">Nam</Field>
              <Field type="radio" id="female" name="gender" value="female">Nữ</Field>
            </label>
          </div>

          <div>
            <label htmlFor="country">Quốc tịch: </label>
            <Field type="text" id="country" name="country" />
            <ErrorMessage component="div" name="country" className="text-red" />
          </div>

          <div>
            <label htmlFor="company">Công ty làm việc: </label>
            <Field type="text" id="company" name="company" />
            <ErrorMessage component="div" name="company" className="text-red" />
          </div>

          <div>
            <label htmlFor="position">Bộ phận làm việc: </label>
            <Field type="text" id="position" name="position" />
            <ErrorMessage component="div" name="position" c lassName="text-red" />
          </div>

          <div>
            <label>Có thẻ bảo hiểm y tế:</label>
            <label htmlFor="medicalInsurance">
              <Field type="checkbox" id="medicalInsurance" name="medicalInsurance" />
            </label>
          </div>

          <h2>Địa chỉ liên lạc tại Việt Nam</h2>

          <div>
            <label htmlFor="province">Tỉnh thành: </label>
            <Field type="text" id="province" name="province" />
            <ErrorMessage component="div" name="province" className="text-red" />
          </div>

          <div>
            <label htmlFor="district">Quận/ huyện: </label>
            <Field type="text" id="district" name="district" />
            <ErrorMessage component="div" name="district" className="text-red" />
          </div>

          <div>
            <label htmlFor="ward">Phường/ xã: </label>
            <Field type="text" id="ward" name="ward" />
            <ErrorMessage component="div" name="ward" className="text-red" />
          </div>

          <div>
            <label htmlFor="address">Số nhà, phố, tổ dân phố/ thôn: </label>
            <Field type="text" id="address" name="address" />
            <ErrorMessage component="div" name="address" className="text-red" />
          </div>

          <div>
            <label htmlFor="phone">Điện thoại: </label>
            <Field type="text" id="phone" name="phone" />
            <ErrorMessage component="div" name="phone" className="text-red" />
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage component="div" name="email" className="text-red" />
          </div>

          <h2>Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia/vùng
            lãnh thổ nào (Có thể đi qua nhiều quốc gia)
          </h2>

          <div>
            <lable htmlFor="countries"></lable><br></br>
            <textarea id="countries" type='text' name="countries"></textarea>
            <ErrorMessage name="countries" component="div" className='text-area' />
          </div>

          <h2>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện
            dấu hiệu nào sau đây không
          </h2>

          <div>
            <label htmlFor="fever">
              <Field type="checkbox" id="fever" name="fever" />
              Sốt
            </label>
          </div>

          <div>
            <label htmlFor="cough">
              <Field type="checkbox" id="cough" name="cough" />
              Ho
            </label>
          </div>

          <div>
            <label htmlFor="breathLess">
              <Field type="checkbox" id="breathLess" name="breathLess" />
              Khó thở
            </label>
          </div>

          <div>
            <label htmlFor="pneumonia">
              <Field type="checkbox" id="pneumonia" name="pneumonia" />
              Viêm phổi
            </label>
          </div>

          <div>
            <label htmlFor="soreThroat">
              <Field type="checkbox" id="soreThroat" name="soreThroat" />
              Đau họng
            </label>
          </div>

          <div>
            <label htmlFor="tired">
              <Field type="checkbox" id="tired" name="tired" />
              Mệt mỏi
            </label>
          </div>

          <h2>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?
          </h2>

          <div>
            <label htmlFor="person1">
              <Field type="checkbox" id="person1" name="person1" />
              Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
            </label>
          </div>

          <div>
            <label htmlFor="person2">
              <Field type="checkbox" id="person2" name="person2" />
              Người từ nước có bệnh COVID-19
            </label>
          </div>

          <div>
            <label htmlFor="person3">
              <Field type="checkbox" id="person3" name="person3" />
              Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>

      </Formik>
    </>
  )
}

