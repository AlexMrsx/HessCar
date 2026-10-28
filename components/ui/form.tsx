"use client"

import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Field, FieldGroup, FieldLabel, FieldTitle} from "@/components/ui/field";
import {useEffect, useState} from "react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Slider} from "@/components/ui/slider";
import {CheckboxGroup} from "@base-ui/react";
import {Checkbox} from "@/components/ui/checkbox";

export default function MainForm(){
    const [tripType, setTripType] = useState<"aller" |"aller-retour">("aller");
    const [distance, setDistance] = useState<number>(32);
    const [prix, setPrix] = useState<number>(2.3);
    const [consommation, setConsommation] = useState<number>(5.3);
    const [peopleCount, setPeopleCount] = useState<number>(3);
    const [driverPays, setDriverPays] = useState<boolean>(false);
    const [parking, setParking] = useState<number>(0);

    const allPeople = driverPays ? peopleCount : peopleCount - 1;
    const allDistance = tripType === "aller" ? distance : distance * 2;
    const totalLitre = allDistance * consommation / 100;
    const totalPrice = totalLitre * prix;

    const result = allPeople > 0 ? (totalPrice + parking) / allPeople : 0;

    return (
        <section className="flex flex-col  gap-5">

            <RadioGroup className={"flex "}  value={tripType} onValueChange={setTripType} defaultValue={"aller"}>
                <Field orientation={"horizontal"}>
                    <RadioGroupItem value={"aller"} id={"aller"}/>
                    <FieldLabel>Aller</FieldLabel>
                </Field>

                <Field orientation={"horizontal"}>
                    <RadioGroupItem value={"aller-retour"} id={"aller-retour"}/>
                    <FieldLabel>Aller-Retour</FieldLabel>
                </Field>
            </RadioGroup>
            <Field>
                <FieldTitle>Distance ( km )</FieldTitle>
                <InputGroup>
                    <InputGroupAddon>km</InputGroupAddon>
                    <InputGroupInput value={distance} type="number" onChange={(e) => setDistance(Number(e.target.value))} />
                </InputGroup>
            </Field>
            <FieldGroup>
                <Field>
                    <FieldLabel>Prix / L</FieldLabel>
                    <InputGroup>
                        <InputGroupAddon>€</InputGroupAddon>
                        <InputGroupInput value={prix} type="number" onChange={(e) => setPrix(Number(e.target.value))} />
                    </InputGroup>
                    <Slider value={prix} min={0} max={3} step={0.1} onValueChange={(value) => setPrix(Number(value))} />
                </Field>
                <Field>
                    <FieldLabel>L / 100</FieldLabel>
                    <InputGroup>
                        <InputGroupAddon>L</InputGroupAddon>
                        <InputGroupInput value={consommation} type="number" onChange={(e) => setConsommation(Number(e.target.value))} />
                    </InputGroup>
                    <Slider value={consommation} min={0} max={10} step={0.1} onValueChange={(value) => setConsommation(Number(value))} />
                </Field>
            </FieldGroup>
            <Field>
                <FieldLabel>Nombre de passagers ( conducteur inclus )</FieldLabel>
                <InputGroup>
                    <InputGroupAddon></InputGroupAddon>
                    <InputGroupInput value={peopleCount} type="number" onChange={(e) => setPeopleCount(Number(e.target.value))} />
                </InputGroup>
            </Field>
            <Field orientation={"horizontal"}>
                <FieldLabel>Le conducteur paie sa part ?</FieldLabel>
                <Checkbox checked={driverPays} onCheckedChange={setDriverPays} />
            </Field>
            <Field>
                <FieldLabel>Vous payez un parking ?</FieldLabel>
                <InputGroup>
                    <InputGroupAddon>€</InputGroupAddon>
                    <InputGroupInput value={parking} type="number" onChange={(e) => setParking(Number(e.target.value))} />
                </InputGroup>
            </Field>
            <Card className="bg-secondary">
                <CardHeader>
                    <CardTitle>Résultat</CardTitle>
                    <CardDescription>Voici ce que chaque passagers doit payer au conducteur</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-bold">{result.toFixed(2)} €</p>
                </CardContent>
            </Card>
        </section>
    )
}