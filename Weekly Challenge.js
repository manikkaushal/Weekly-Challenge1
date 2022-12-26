//WEEKLY CHALLANGE_______________________________________________________

//(You have to declare three variables. Give three of them a birthday date. Then you have

//to check the current age of every variable. Then using condition find who

//is older and who is younger.)

let manik = "01 January,2000";

let random   = "01 January,2001";

let abc = "01 January,2002";



let v = new Date(manik);

let v1 = new Date(manik);

let v2 = new Date(manik);

let dob1 = console.log(

  "DOB of manik is : " +

    v.getDate() +

    "/" +

    (v.getMonth() + 1) +

    "/" +

    v2.getFullYear()

);



let s = new Date(random);

let s1 = new Date(random);

let s2 = new Date(random);

let dob2 = console.log(

  "DOB of random is : " +

    s.getDate() +

    "/" +

    (s1.getMonth() + 1) +

    "/" +

    s2.getFullYear()

);



let vk = new Date(abc);

let vk1 = new Date(abc);

let vk2 = new Date(abc);

let dob3 = console.log(

  "DOB of abc is : " +

    vk.getDate() +

    "/" +

    (vk1.getMonth() + 1) +

    "/" +

    vk2.getFullYear()

);



let DOB = new Date(manik);

let month_diff = Date.now() - DOB.getTime();

let age_dt = new Date(month_diff);

let year = age_dt.getUTCFullYear();

let age = Math.abs(year - 1970);

console.log("Age of the date entered(manik) : " + age + " years");



let DOB1 = new Date(random);

let month_diff1 = Date.now() - DOB1.getTime();

let age_dt1 = new Date(month_diff1);

let year1 = age_dt1.getUTCFullYear();

let age1 = Math.abs(year1 - 1970);

console.log("Age of the date entered(random) : " + age1 + " years");



let DOB2 = new Date(abc);

let month_diff2 = Date.now() - DOB2.getTime();

let age_dt2 = new Date(month_diff2);

let year2 = age_dt2.getUTCFullYear();

let age2 = Math.abs(year2 - 1970);

console.log("Age of the date entered(abc) : " + age2 + " years");



if (age >= age1 && age >= age2) {

  console.log("Manik is the elder one");

} else if (age1 >= age && age1 >= age2) {

  console.log("random is the elder one");

} else {

  console.log("abc is the elder one");

}


