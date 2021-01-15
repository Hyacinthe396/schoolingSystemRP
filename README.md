 #schooling System

#### What does this Project do?
* This Project help student to register themSelf and it also help admin to manage the all students by getting all student registered.
#### Description of Task to be completed?
* Once student registered her/hisself the she/he should signin as student role so that he/she can modify his/her information 
* also admin should login to get students and try to modify his/her info.

#### Working endpoints 
* `POST /api/school/register`
* `POST /api/school/sign-up`
* `POST /api/school/login`
* `GET /api/school/students`
* `PATCH /api/school/user-update`
#### How should this be manually tested?
*  clone the RP by using `https://github.com/Hyacinthe396/schoolingSystemRP.git`
*  make sure you know where you cloned your RP and enter in it and run `code .`
*  run `npm install ` to install some packages you do not have
*  run `npm run startDev`
*  to register yourSelf go to post man with the post method on the router of `http://localhost:3000/api/school/register` and enter you information in body there for instance: `{
    "fullname": "keke","email": "Hyacinthe@gmail.com", "birthdate": "2024-06-02", "gender": "female","tel": "0783972828","country": "Rwanda","city": "kigali}`
* to signup us student or employee go to post man with the post method on the router of `http://localhost:3000/api/school/sign-up` and enter you information in body there for instance: `{ "fullname": "bebe", "email": "bebe@gmail.com","birthdate": "2000-06-02","gender": "female","tel": "0783972828","country": "Rwanda","role": "superAdmin","city": "kigali","password": "bebe"}` 
* to login go to postman and use route `http://localhost:3000/api/school/login` and in body put you email and password in form of : `{"email":"mutoni@gmail.com","password":"mutoni"}` and send to get token to use in performing the task of geting if you are admin.
* to get all students use paste you token in a header and use route: ` http://localhost:3000/api/school/students` and get all students registered from database.
* finaly you can now update some information while you student or employee by setting your token in the header and use route : `http://localhost:3000/api/school/user-update` in the body put what you want to update and send.


#### Any background context you want to provide?
N/A
#### Screenshots
<a href="https://ibb.co/SVFKhBQ"><img src="https://i.ibb.co/YfHtzhD/school1.png" alt="school1" border="0"></a>
<a href="https://ibb.co/4JvZJKC"><img src="https://i.ibb.co/vDyxDVf/school2.png" alt="school2" border="0"></a>
<a href="https://ibb.co/NC82dYZ"><img src="https://i.ibb.co/2hD31Kg/school3.png" alt="school3" border="0"></a>
<a href="https://ibb.co/6wdV37r"><img src="https://i.ibb.co/g9nH5Lm/school4.png" alt="school4" border="0"></a>
<a href="https://ibb.co/Wn3ST9S"><img src="https://i.ibb.co/p2PCmDC/school5.png" alt="school5" border="0"></a>

