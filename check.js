var firstCity="Oxford";
var secondCity="Chicago"
 function highestInternationalStudents(firstCity, secondCity) {
    const url= "https://jsonmock.hackerrank.com/api/universities";
   fetch(url)
   .then(response => response.json())
   .then(data =>{
    const universitiesInCities= data.data.filter(university=>{
        const location= university.location;
        return location.city === firstCity || location.city === secondCity;
    })
    universitiesInCities.sort((a,b)=>{
        const studentsA= parseInt(a["international_students"].replace(",",""));
        const studentsB= parseInt(b["international_students"].replace(",",""));
        return studentsB-studentsA;
    })
    return universitiesInCities[0].university;
})
.catch(err => console.log(err));
    }

  var result= highestInternationalStudents();