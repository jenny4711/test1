const data = {
  date: '3월4일2024년',
  city: '도쿄',
  country: '일본',
  weather: '비',
  kind: '특별한추억'
};
let arrData=[]
const LOCAL_URL = `http://localhost:5000/project/ai`;

async function postJSON(data) {
  try {
    const response = await fetch(LOCAL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result?.data);
    arrData.push(result.data)
    console.log(arrData,'arrDAta')
  } catch (error) {
    console.error("Error:", error);
  }
}







postJSON(data);

