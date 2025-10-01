import { format } from "date-fns";

export function uiElement(divele) {
  // div element = divele
  const userInfoEle = (data) => {
    const uid = data.uid;
    const email = data.email;
    const fullname = data.displayName;
    const photourl = data.photoURL;
    const createdtime = data.metadata.creationTime;

    // const getdate = new Date(createdtime).getDate();
    // const months = [
    //   "Jan",
    //   "Feb",
    //   "Mar",
    //   "Apr",
    //   "May",
    //   "Jun",
    //   "Jul",
    //   "Aug",
    //   "Sep",
    //   "Oct",
    //   "Nov",
    //   "Dec",
    // ];
    // const getmonth = new Date(createdtime).getMonth();
    // const getyear = new Date(createdtime).getFullYear();

    // const formatteddate = `${getdate} ${getmonth} ${getyear}`;

    // cdn
    // const formatteddate = dateFns.format(new Date(createdtime), "do MMM yyyy");

    // npm
    const formatteddate = format(new Date(createdtime), "do MMM yyyy");

    // console.log(formatteddate);

    const html = `
        <img
          src="${photourl}"
          width="80"
          alt="profile icon"
        />
        <p>UID : ${uid}</p>
        <p>Display Name : ${fullname}</p>
        <p>Email : ${email}</p>
        <p>Create At : ${formatteddate}</p>
        `;

    divele.innerHTML = html;
  };

  return { userInfoEle };
}
