import * as React from 'react';
import { useState } from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";
import { InputAdornment, TextField, Checkbox, FormControlLabel, Box } from "@mui/material";
// import { Person, Info, VisibilityOff, Visibility,Email } from "@mui/icons-material";

const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isAdmin, setAdmin]= useState(false)

    // let navigate = useNavigate();

    const initialValues = {
        name:"",
        email: "",
        password: "",
        isAdmin: false
      };
    
      // ************************* General form validation
      const validateUser = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").email("Enter a valid email")
      });
      const validateAdmin = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").email("Enter a valid email"),
        password: Yup.string().required("Password is required for admin"),
      });
      const postUserData = async()=>{
        try {
            axios.post("https://orcalotest-default-rtdb.firebaseio.com/scoreCard.json",{
                email: values.email
            })  
        } catch (error) {
          
          
        }
      }
      const signinSubmit=()=>{
        let userFound = values.name !=="" && values.email !== "";
          if (userFound) {
            // navigate("/home", { replace: true });
            postUserData();
          }else{
            console.log("user not logged in");
            
          }
      }
      // ************************* General useFormik Hook 
      const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
        useFormik({
          initialValues,
          validationSchema: validateUser,
          // validationSchema: {isAdmin ? validateUser : validateAdmin},
          onSubmit: signinSubmit,
        });

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
            <label htmlFor="name" className={errors.name && touched.name ? "text-danger" : ""}>
                Name
            </label>
            <TextField
                type="text"
                id="name"
                fullWidth
                variant="outlined"
                error={!!(errors.name && touched.name)}
                size="small"
                sx={{backgroundColor:'#fff'}}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       {errors.name && touched.name ? (<Info fontSize="medium" className="text-danger" />) 
                //       : (<Person fontSize="medium" className="icon-color"/>)}
                //     </InputAdornment>
                //   ),
                // }}
              />
        </div>
        <div className='py-5'>
            <label htmlFor="email" className={errors.email && touched.email ? "text-danger" : ""}>
                Email
            </label>
            <TextField
                type="email"
                id="email"
                fullWidth
                variant="outlined"
                error={!!(errors.email && touched.email)}
                size="small"
                sx={{backgroundColor:'#fff'}}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       {errors.email && touched.email ? (<Info fontSize="medium" className="text-danger" />) 
                //       : (<Email fontSize="medium" className="icon-color"/>)}
                //     </InputAdornment>
                //   ),
                // }}
              />
        </div>
        {isAdmin && <div className='pb-5'>
            <label htmlFor="password" className={ errors.password && touched.password ? "text-danger" : "input-label" }>
                Password
            </label>
            <TextField
                fullWidth
                id="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                size="small"
                value={values.password}
                onChange={handleChange}
                sx={{backgroundColor:'#fff'}}
                onBlur={handleBlur}
                error={!!(errors.password && touched.password)}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">
                //       {errors.password && touched.password ? (
                //         <Info fontSize="medium" className="text-danger" />
                //       ) : showPassword ? (
                //         <Visibility
                //           fontSize="medium"
                //           className="cursor-pointer icon-color"
                //           onClick={() => setShowPassword(!showPassword)}/>
                //       ) : (
                //         <VisibilityOff
                //           sx={{color: "#6C6B6B" }}
                //           fontSize="medium"
                //           className="cursor-pointer icon-color"
                //           onClick={() => setShowPassword(!showPassword)}/>
                //       )}
                //     </InputAdornment>
                //   ),}}
                  />
        </div>}
        <div>
        <FormControlLabel
              control={
                <Checkbox
                  id="isAdmin"
                  onChange={handleChange}
                  onClick={()=>{setAdmin(!isAdmin)}}
                  value={values.isAdmin}
                  sx={{
                    color: "#CACACA",
                    "&.Mui-checked": {
                      color: "#7fb341",
                    },
                  }}
                />
              }
              label="Is Admin"
              sx={{ mb: "0px"}}
            />
        </div>
        <button type="submit" className='w-100 text-center btn btn-success text-white'>
            LOGIN
        </button>
      </form>
    </div>
  )
}

export default SigninForm
