"use client";

import {ZodI18nProvider, useZodI18n} from "tp-kit/components";
import {Form} from "./form";

export default function Connexion() {
    return <ZodI18nProvider><Form/></ZodI18nProvider>;
}