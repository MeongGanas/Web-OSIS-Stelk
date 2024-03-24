import { Button, Input } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form action={""} className="w-96 px-5">
        <h1 className="font-bold text-primary text-3xl mb-10">Login Admin</h1>
        <Input
          isRequired
          type="text"
          label="username"
          className="w-full mb-5"
        />
        <Input
          isRequired
          type="password"
          label="password"
          className="w-full mb-5"
        />
        <Button size="md" type="submit" className="bg-primary text-white">
          Login
        </Button>
      </form>
    </div>
  );
}
