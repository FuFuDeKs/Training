//8.uzdevums: problēmas risinājums
//Klubs uztur biedru sarakstu. Katrs biedrs tiek attēlots kā objekts ar četrām īpašībām: vārds, uzvārds, loma un stundas. 
// Lomas var būt "leader" (vadītājs) vai "member" (biedrs). Stundas nosaka brīvprātīgo stundu skaitu mēnesī katram biedram.

//Izveidojiet testa datus, lai jūsu izveidotā programma spētu veikt uzdevumu.
//Ir jāizveido saraksts, kurā ir 2 vadītāji un 5 biedri.

//Programmai jāsniedz atbildes uz trim jautājumiem:
//1. Kas ir vadītāji?
//Izdrukājiett konsolē visus biedrus, kuriem ir loma "leader".

//2. Cik liels ir kopējais brīvprātīgo stundu skaits?
//Aprēķiniet un izvadiet summu visiem biedriem kopā.

//3. Kuri saņems balvu “Zvaigžņu brīvprātīgais”?
//Balvu saņem biedrs, kuram ir vismaz 20 stundas un kurš nav vadītājs.
//Izdrukā (console) šo biedru vārdus.
//Ja balvu nesaņem neviens, tad izmainiet testa datus, lai būtu vismaz viens biedrs, kurš atbilst kritērijiem.


let leaders =
    [
        { name: "name1", surname: "surname1", loma: "leader", hours: 40 },
        { name: "name2", surname: "surname2", loma: "leader", hours: 43 }
    ];

let members =
    [

        { name: "name3", surname: "surname3", loma: "member", hours: 23 },
        { name: "name4", surname: "surname4", loma: "member", hours: 34 },
        { name: "name5", surname: "surname5", loma: "member", hours: 11 },
        { name: "name6", surname: "surname6", loma: "member", hours: 1 },
        { name: "name7", surname: "surname7", loma: "member", hours: 21 }

    ];
//-------------------------------------------------------------------

console.log(leaders);

let totalMemberHours = members.reduce((sum, member)=> sum + member.hours, 0);
let totalLeadersHours =  leaders.reduce((sum, leaders)=> sum + leaders.hours, 0);

console.log("Members:", totalMemberHours);
console.log("Leaders:", totalLeadersHours);
console.log("All Hours:",  totalLeadersHours + totalMemberHours)

