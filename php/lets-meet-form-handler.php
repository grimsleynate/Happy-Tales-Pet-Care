<?php

if($_POST["submit"]) {
    $recipient="happytalespetcare@gmail.com";
    $subject="New Let's Meet Form Filled Out";
    $sender=$_POST["user_name"];
    $senderPhone=$_POST["user_phone"];
    $senderEmail=$_POST["user_email"];
    $senderAddress=$_POST["user_address"];
    $senderCity=$_POST["user_city"];
    $senderZip=$_POST["user_zip"];
    $serviceRequested=$_POST["user_service_requested"];
    $otherService=$_POST["user_other_service"];
    $datesNeeded=$_POST["user_dates_needed"];
    $specialCare=$_POST["user_special_care"];
    $petSummary=$_POST["user_pet_summary"];

    $mailBody="Name: $sender\n\nPhone: $senderPhone\nEmail: $senderEmail\nAddress: $senderAddress $senderCity, $senderZip\n\n
        Service Needed: $serviceRequested\n Other Service (if needed): $otherService\n Dates Needed: $datesNeeded\n
        Special Care: $specialCare\nPet Personality Summary: $petSummary";
    
    mail($recipient, $ubject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?><!DOCTYPE html>

