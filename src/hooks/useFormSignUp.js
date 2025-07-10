import { useState } from "react";
import { useForm } from "react-hook-form";

const useSignupForm = () => {
  const [animateLock, setAnimateLock] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const triggerLockAnimation = () => {
    setAnimateLock(true);
    setTimeout(() => setAnimateLock(false), 500);
  };

  return {
    register,
    handleSubmit,
    errors,
    watch,
    animateLock,
    triggerLockAnimation,
  };
};

export default useSignupForm;
