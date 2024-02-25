import {Card, Input, Typography, Button, Spinner} from "@material-tailwind/react";
import { useForm} from "react-hook-form"
import {useLoginMutation} from "../../redux/features/auth/authApi.js";
import {useDispatch, useSelector} from "react-redux";
import Error from "../validation/Error.jsx";
import {SetLoginError} from "../../redux/features/auth/authSlice.js";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [login, {isLoading, isSuccess}] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector((state)=> state.auth.LoginError);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) =>{
        // console.log(data);
        dispatch(SetLoginError(""));
        login(data);
    }


    return (
        <>
            <div className="min-h-[80vh] py-8 mt-1 grid place-items-center form-container">
                <Card color="transparent" className="p-7 bg-white w-[90%] sm:w-[450px]" shadow={true}>
                    <Typography variant="h4" color="blue-gray">
                        Login
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your email & password to login
                    </Typography>
                    {error && (
                        <>
                            <Error message={error}/>
                        </>

                    )
                    }
                    <br/>
                    <form onSubmit={handleSubmit(onSubmit)} className="py-4 grid grid-cols-1 w-[100%] gap-6">

                        <div>
                            <Input
                                size="lg"
                                type="email"
                                label="Email Address"
                                {...register("email",
                                    {
                                        required: "Email is required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Enter valid email address"
                                        },
                                        maxLength: {value: 32, message: "Maximum 32 character"}
                                    })}
                                error={Boolean(errors?.email?.message)}
                            />
                            {errors?.email?.message && (
                                <span className="error-text">{errors?.email?.message}</span>
                            )}
                        </div>

                        <div>
                            <Input
                                size="lg"
                                type="password"
                                label="Password"
                                {...register("password", {
                                    required: {value: true, message: "Password is required!"},
                                    minLength: {value: 6, message: "Minimum 6 character"},
                                    maxLength: {value: 32, message: "Maximum 32 character"}
                                })}
                                error={Boolean(errors?.password?.message)}
                            />
                            {errors?.password?.message && (
                                <span className="error-text">{errors?.password?.message}</span>
                            )}
                        </div>
                        <div className="flex items-center justify-end">
                            <Link to="/forgot-password" className="text-gray-500 hover:underline cursor-pointer duration-200">Forgot Password?</Link>
                        </div>
                        <div className="w-full">
                            <Button disabled={isLoading}
                                    className={`${isLoading && "capitalize"} w-full flex gap-3 items-center justify-center disabled:cursor-not-allowed`}
                                    type="submit">
                                {
                                    isLoading ? (
                                        <>
                                            <Spinner className="h-4 w-4"/> Processing...
                                        </>
                                    ) : (
                                        <>
                                            Login
                                        </>
                                    )
                                }

                            </Button>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link to="/register" className="text-primary underline cursor-pointer">Not a user Register
                                here?</Link>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default Login;