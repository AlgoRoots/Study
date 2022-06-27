import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Link href={"/home"}>link to home</Link>
      <Link href={"/me"}>link to me</Link>
    </>
  );
};

export default index;
