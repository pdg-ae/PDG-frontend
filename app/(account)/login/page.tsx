'use client'

import Link from "next/link";
import { SubmitButton } from "./submit-button";

import { signIn } from './sign-functions'
import { useState } from "react";

import logoPDG from '../../../assets/logo/PDG.svg'
import Image from "next/image";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {

  const [loginOption, setLoginOption] = useState<boolean>(true) //true = login; false =  forgot password

  const toogleLoginOption = () => {
    setLoginOption(!loginOption);
  };

  return (
    <div className="mx-auto bg-zinc-900 min-h-screen flex justify-center items-center">
      <div className="max-w-screen-lg flex flex-row px-4">
        <div className="flex items-center">
          <p className='text-4xl text-slate-100'>
            Compartilhe seus momentos épicos.<br />
            Sua jornada gamer, nossa comunidade.<br />
            PDG, onde as histórias de jogos ganham vida!
          </p>
        </div>
        <div className="bg-blue-950/[.30] p-4 w-fit rounded-lg flex-1">

          <Image src={logoPDG} alt="PDG" className="h-40 w-auto mb-6" />

          {loginOption ?
            <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
              <label className="text-md hidden" htmlFor="email">
                Email
              </label>

              <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6 placeholder:text-slate-50 text-slate-50 focus:bg-slate-800"
                name="email"
                type="email"
                placeholder="Email*"
                required
              />
              <label className="text-md hidden" htmlFor="password">
                Password
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6 placeholder:text-slate-50 text-slate-50 focus:bg-slate-800"
                type="password"
                name="password"
                placeholder="Senha*"
                required
              />
              <SubmitButton
                formAction={signIn}
                className="bg-sky-400 rounded-md px-4 py-2 text-foreground mb-2 text-slate-50 hover:bg-sky-600 active:bg-sky-500 transition-all font-bold"
                pendingText="Entrando..."
              >
                Entrar
              </SubmitButton>
              <button
                onClick={toogleLoginOption} type="button"
                className="text-slate-50 hover:underline box-content mx-auto"
              >
                Esqueci minha senha
              </button>

              <hr className="bg-slate-50" />

              <p className='font-bold text-[1rem] text-gray-50 text-center'>
                Não possui conta?
              </p>

              <Link
                href="/subscribe"
                className="rounded-md px-4 py-2 text-foreground mb-2 bg-violet-400 text-slate-50 hover:bg-violet-600 active:bg-violet-500 transition-all font-bold text-center"
              >
                Cadastre-se
              </Link>
              {searchParams?.message && (
                <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                  {searchParams.message}
                </p>
              )}
            </form>
            :
            <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
              <label className="text-md text-slate-50 text-xl" htmlFor="email">
                Recupere sua conta
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6 placeholder:text-slate-50 text-slate-50 focus:bg-slate-800"
                name="email"
                placeholder="Email"
                required
              />
              <SubmitButton
                formAction={signIn}
                className="bg-sky-400 rounded-md px-4 py-2 text-foreground mb-2 hover:bg-sky-600 active:bg-sky-500 transition-all text-slate-50 font-bold"
                pendingText="Entrando..."
              >
                Enviar
              </SubmitButton>

              <button
                onClick={toogleLoginOption}
                className="text-slate-50 hover:underline box-content mx-auto"
              >
                Voltar
              </button>
              {searchParams?.message && (
                <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                  {searchParams.message}
                </p>
              )}
            </form>
          }
        </div>
      </div>
    </div >
  );
}