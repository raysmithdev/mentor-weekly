import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      <Navbar user={props.user} dashboard={props.dashboard} loggedin={props.loggedin}/>
      <Sidebar user={props.user} />
      <h1 className="title">{props.title}</h1>
      <div className="children">{props.children}</div>
      <style jsx>{`
        .dashboard{
          font-family: "Helvetica Neue", "Segoe UI", Helvetica, sans-serif;
          font-weight: 100;
          background-color: #F4F4F4;
          left: 250px;
          text-align: center;
          height: 100%;
        }
        .title{
          display: inline-block;
          margin: 80px auto;
          font-weight: 100;
          font-size: 2.5em;
          clear: right;
        }
        .children{
        }

        @media only screen and (min-width: 726px) {
          .title{

            width: 100%;

          }
        }
        @media only screen and (min-width: 900px) {
          .title{
            width: 70%;
          
          }

      `}</style>
    </div>
);
}