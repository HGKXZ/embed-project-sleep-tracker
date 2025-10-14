import SignInBoxComponent from "@/components/sign-in-box"

export default function SignIn() {
  return (
    <div className="w-[1521px] h-[1521px] bg-gradient-to-bl from-[#764BA2] via-[#667EEA] to-[#667EEA] justify-center items-center flex">
        <SignInBoxComponent/>
        <div className="absolute">
          <img src="/img/star-bg.png" alt="Star Background" width={1521} height={1440}/>
        </div>
    </div>
  )
};
