import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function OrderHistory() {
  return (
    <React.Fragment>
      <div id="userprofile">
        <Card style={{ borderRadius: "1rem" }} className="border-0 my-4">
          <Card.Header style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} className="bg-white pt-4 px-5">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small className="text-muted">Monday, 14 June 2020 - 02:00pm</small>
                <p style={{ fontSize: "24px" }} className="font-weight-bold">Avengers: End Game</p>
              </div>
              <svg width="85" height="43" viewBox="0 0 116 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.45166 42.7551C12.0706 42.7551 15.4872 40.9736 18.0721 39.1921C19.5557 38.1455 20.9493 36.9653 22.2755 35.607L19.3759 32.623C17.0382 34.8721 12.4078 38.0341 8.81131 38.0341C7.66493 38.0341 6.90069 37.6334 5.9791 36.0077C11.2164 34.5826 15.0826 30.6411 15.0826 26.9669C15.0826 23.6044 12.5202 21.3998 9.17095 21.3998C3.01203 21.3998 0 28.4366 0 33.4692C0 38.3904 2.80972 42.7551 8.45166 42.7551ZM5.46211 32.289C5.46211 30.3071 5.82175 25.653 9.66546 25.653C10.3847 25.653 10.9467 26.6106 10.9467 27.9467C10.9467 29.8172 7.5975 32.289 5.46211 32.289ZM25.9694 24.5842C30.1503 19.5515 34.8706 12.9601 34.8706 7.32626C34.8706 3.2957 34.1738 0 29.6108 0C23.5193 0 19.9453 16.0109 18.5067 24.7401C17.7874 29.1046 17.4053 32.6898 17.1581 35.2952C17.0232 36.8094 16.9333 38.1678 16.8884 39.3703C17.9673 40.0161 19.0911 40.5727 20.2825 41.0627C22.3279 41.9311 24.9354 42.7551 27.4754 42.7551H28.0374C28.5993 42.5324 29.1387 42.3096 29.6332 42.0647C30.5099 41.6416 31.4764 41.1295 31.9935 40.6173C36.2192 39.6598 39.3436 38.346 42.6479 35.3843L40.9171 31.71C38.5345 34.0705 36.3316 35.0725 34.1513 36.3418C35.927 33.625 36.3092 31.3092 36.3092 28.303C36.3092 24.6955 34.2188 21.3775 30.7122 21.3775C29.341 21.3775 28.0148 22.7581 26.329 24.8291L25.9694 24.5842ZM28.352 26.4547C30.7122 26.4547 31.2742 27.7686 31.2742 29.2382C31.2742 32.6453 29.9704 38.4796 26.8685 38.4796C25.9918 38.4796 25.0028 38.3014 24.1262 38.1233C23.6317 38.0119 23.1372 37.9006 22.6427 37.7447C22.6876 37.2325 22.7326 36.6759 22.8 36.0746C22.9124 35.028 23.0922 33.6696 23.362 32.0663C24.0138 28.1025 26.2616 26.4547 28.352 26.4547ZM30.5549 6.05697C30.1053 12.3811 25.812 18.1487 23.362 22.8249C24.0813 18.9057 26.9359 4.27551 29.4084 4.27551C30.4199 4.27551 30.5549 5.81202 30.5549 6.05697ZM40.9246 36.2527C41.1045 39.0808 41.1494 43 44.6334 43C46.7239 43 49.5336 38.7245 51.2868 35.1393C51.3543 37.3661 53.2874 39.5262 56.5017 39.5262C58.4123 39.5262 60.6152 38.7245 62.5932 37.4775V32.2444C61.9413 32.6675 61.312 33.0684 60.705 33.4023C59.6486 34.0037 58.3674 34.5381 57.4682 34.5381C55.0407 34.5381 54.4338 33.0906 54.4338 31.6654C54.4338 30.9752 54.5462 30.3294 54.7035 29.8172C54.771 29.5277 54.8608 29.2605 54.9732 28.9933C56.2994 26.0761 57.2435 24.8737 57.2435 23.2481C57.2435 22.1569 56.0972 21.3775 54.3664 21.3775C53.0626 21.3775 51.9387 22.1347 51.7589 22.9586L45.8473 36.9208L45.5325 36.943L46.4092 22.8473C46.3867 22.0679 45.8023 21.3775 44.7908 21.3775C44.6334 21.3775 44.521 21.3998 44.3637 21.4221L41.6664 21.8452C40.6998 22.001 40.52 23.7602 40.52 26.811C40.52 29.1714 40.6998 31.0865 40.8797 35.5401L40.9246 36.2527ZM73.9969 38.5018C73.9969 36.1859 72.6932 34.8944 70.1982 34.8944C67.2985 34.8944 66.0847 36.9876 66.0847 39.1476C66.0847 41.6862 67.5683 42.7551 69.7711 42.7551C73.9295 42.7551 73.9969 38.8804 73.9969 38.5018ZM91.7394 33.4915C89.7614 35.0948 86.3897 38.4796 84.2543 38.4796C83.3327 38.4796 83.1079 37.6334 83.1079 36.2972C83.1079 32.1776 86.1199 24.6287 86.1199 22.6468C86.1199 21.8674 85.7603 21.3775 84.5016 21.3775C83.1529 21.3775 80.8377 22.001 80.4106 23.5375C79.3317 27.9912 77.3536 34.5158 77.3536 38.2792C77.3536 40.9736 78.4101 42.7551 81.5345 42.7551C84.9961 42.7551 89.5815 39.9715 91.7394 38.0119V33.4915ZM81.6919 15.1202C81.6919 17.1688 82.9281 18.505 85.558 18.505C88.615 18.505 89.9187 16.523 89.9187 14.5189C89.9187 12.2921 88.1879 11.4014 86.0975 11.4014C82.7708 11.4014 81.6919 13.7618 81.6919 15.1202ZM100.536 25.9202C100.625 25.8312 100.603 32.2222 100.873 33.4247C100.536 34.2932 100.154 35.0502 99.7268 35.7406C99.0075 36.9208 97.9736 38.0565 96.8947 38.0565C94.8039 38.0565 94.3768 36.7427 94.3768 35.5624C94.3768 32.5785 96.5571 27.8354 100.536 25.9202ZM115.326 33.2465C114.427 34.0037 113.573 34.6717 112.741 35.2729C111.281 36.2972 109.617 37.2993 108.493 37.2993C107.301 37.2993 106.92 35.7406 106.92 34.0481C106.92 32.7121 107.301 30.9974 107.594 30.1957C110.718 22.7136 114.427 16.5676 115.214 8.15018C115.259 7.59348 115.281 7.05904 115.281 6.54686C115.281 3.13983 114.247 0 111.415 0C105.706 0 100.716 11.1786 100.446 22.6023C93.6126 23.2258 88.9821 29.7282 88.9821 35.4065C88.9821 39.1253 90.8253 42.7551 94.6916 42.7551C97.4337 42.7551 100.244 40.929 102.469 38.7913C103.907 42.2429 106.649 42.7328 107.482 42.7328C108.965 42.7328 111.1 41.6416 112.853 40.5727C113.887 39.927 114.944 39.2144 116 38.3904L115.326 33.2465ZM111.1 9.7758C110.808 12.9156 109.504 16.9239 108.29 20.2195C107.571 22.1347 106.784 24.0497 105.93 25.9871V25.7644C105.93 24.8737 105.93 22.3351 106.177 19.3957C106.358 17.2356 107.527 5.16624 110.404 5.16624C110.943 5.16624 111.235 5.70068 111.235 7.30399C111.235 7.90523 111.19 8.72916 111.1 9.7758Z" fill="black"/>
              </svg>
            </div>
          </Card.Header>
          <Card.Body className="px-5">
            <div className="d-flex justify-content-between align-items-center ticket-history">
              <Button variant="success rounded" disabled>Ticket used</Button>
              <button className="btn text-muted position-relative">Show Details</button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ borderRadius: "1rem" }} className="border-0 my-4">
          <Card.Header style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} className="bg-white pt-4 px-5">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small className="text-muted">Monday, 14 June 2020 - 02:00pm</small>
                <p style={{ fontSize: "24px" }} className="font-weight-bold">Avengers: End Game</p>
              </div>
              <svg width="85" height="43" viewBox="0 0 116 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.45166 42.7551C12.0706 42.7551 15.4872 40.9736 18.0721 39.1921C19.5557 38.1455 20.9493 36.9653 22.2755 35.607L19.3759 32.623C17.0382 34.8721 12.4078 38.0341 8.81131 38.0341C7.66493 38.0341 6.90069 37.6334 5.9791 36.0077C11.2164 34.5826 15.0826 30.6411 15.0826 26.9669C15.0826 23.6044 12.5202 21.3998 9.17095 21.3998C3.01203 21.3998 0 28.4366 0 33.4692C0 38.3904 2.80972 42.7551 8.45166 42.7551ZM5.46211 32.289C5.46211 30.3071 5.82175 25.653 9.66546 25.653C10.3847 25.653 10.9467 26.6106 10.9467 27.9467C10.9467 29.8172 7.5975 32.289 5.46211 32.289ZM25.9694 24.5842C30.1503 19.5515 34.8706 12.9601 34.8706 7.32626C34.8706 3.2957 34.1738 0 29.6108 0C23.5193 0 19.9453 16.0109 18.5067 24.7401C17.7874 29.1046 17.4053 32.6898 17.1581 35.2952C17.0232 36.8094 16.9333 38.1678 16.8884 39.3703C17.9673 40.0161 19.0911 40.5727 20.2825 41.0627C22.3279 41.9311 24.9354 42.7551 27.4754 42.7551H28.0374C28.5993 42.5324 29.1387 42.3096 29.6332 42.0647C30.5099 41.6416 31.4764 41.1295 31.9935 40.6173C36.2192 39.6598 39.3436 38.346 42.6479 35.3843L40.9171 31.71C38.5345 34.0705 36.3316 35.0725 34.1513 36.3418C35.927 33.625 36.3092 31.3092 36.3092 28.303C36.3092 24.6955 34.2188 21.3775 30.7122 21.3775C29.341 21.3775 28.0148 22.7581 26.329 24.8291L25.9694 24.5842ZM28.352 26.4547C30.7122 26.4547 31.2742 27.7686 31.2742 29.2382C31.2742 32.6453 29.9704 38.4796 26.8685 38.4796C25.9918 38.4796 25.0028 38.3014 24.1262 38.1233C23.6317 38.0119 23.1372 37.9006 22.6427 37.7447C22.6876 37.2325 22.7326 36.6759 22.8 36.0746C22.9124 35.028 23.0922 33.6696 23.362 32.0663C24.0138 28.1025 26.2616 26.4547 28.352 26.4547ZM30.5549 6.05697C30.1053 12.3811 25.812 18.1487 23.362 22.8249C24.0813 18.9057 26.9359 4.27551 29.4084 4.27551C30.4199 4.27551 30.5549 5.81202 30.5549 6.05697ZM40.9246 36.2527C41.1045 39.0808 41.1494 43 44.6334 43C46.7239 43 49.5336 38.7245 51.2868 35.1393C51.3543 37.3661 53.2874 39.5262 56.5017 39.5262C58.4123 39.5262 60.6152 38.7245 62.5932 37.4775V32.2444C61.9413 32.6675 61.312 33.0684 60.705 33.4023C59.6486 34.0037 58.3674 34.5381 57.4682 34.5381C55.0407 34.5381 54.4338 33.0906 54.4338 31.6654C54.4338 30.9752 54.5462 30.3294 54.7035 29.8172C54.771 29.5277 54.8608 29.2605 54.9732 28.9933C56.2994 26.0761 57.2435 24.8737 57.2435 23.2481C57.2435 22.1569 56.0972 21.3775 54.3664 21.3775C53.0626 21.3775 51.9387 22.1347 51.7589 22.9586L45.8473 36.9208L45.5325 36.943L46.4092 22.8473C46.3867 22.0679 45.8023 21.3775 44.7908 21.3775C44.6334 21.3775 44.521 21.3998 44.3637 21.4221L41.6664 21.8452C40.6998 22.001 40.52 23.7602 40.52 26.811C40.52 29.1714 40.6998 31.0865 40.8797 35.5401L40.9246 36.2527ZM73.9969 38.5018C73.9969 36.1859 72.6932 34.8944 70.1982 34.8944C67.2985 34.8944 66.0847 36.9876 66.0847 39.1476C66.0847 41.6862 67.5683 42.7551 69.7711 42.7551C73.9295 42.7551 73.9969 38.8804 73.9969 38.5018ZM91.7394 33.4915C89.7614 35.0948 86.3897 38.4796 84.2543 38.4796C83.3327 38.4796 83.1079 37.6334 83.1079 36.2972C83.1079 32.1776 86.1199 24.6287 86.1199 22.6468C86.1199 21.8674 85.7603 21.3775 84.5016 21.3775C83.1529 21.3775 80.8377 22.001 80.4106 23.5375C79.3317 27.9912 77.3536 34.5158 77.3536 38.2792C77.3536 40.9736 78.4101 42.7551 81.5345 42.7551C84.9961 42.7551 89.5815 39.9715 91.7394 38.0119V33.4915ZM81.6919 15.1202C81.6919 17.1688 82.9281 18.505 85.558 18.505C88.615 18.505 89.9187 16.523 89.9187 14.5189C89.9187 12.2921 88.1879 11.4014 86.0975 11.4014C82.7708 11.4014 81.6919 13.7618 81.6919 15.1202ZM100.536 25.9202C100.625 25.8312 100.603 32.2222 100.873 33.4247C100.536 34.2932 100.154 35.0502 99.7268 35.7406C99.0075 36.9208 97.9736 38.0565 96.8947 38.0565C94.8039 38.0565 94.3768 36.7427 94.3768 35.5624C94.3768 32.5785 96.5571 27.8354 100.536 25.9202ZM115.326 33.2465C114.427 34.0037 113.573 34.6717 112.741 35.2729C111.281 36.2972 109.617 37.2993 108.493 37.2993C107.301 37.2993 106.92 35.7406 106.92 34.0481C106.92 32.7121 107.301 30.9974 107.594 30.1957C110.718 22.7136 114.427 16.5676 115.214 8.15018C115.259 7.59348 115.281 7.05904 115.281 6.54686C115.281 3.13983 114.247 0 111.415 0C105.706 0 100.716 11.1786 100.446 22.6023C93.6126 23.2258 88.9821 29.7282 88.9821 35.4065C88.9821 39.1253 90.8253 42.7551 94.6916 42.7551C97.4337 42.7551 100.244 40.929 102.469 38.7913C103.907 42.2429 106.649 42.7328 107.482 42.7328C108.965 42.7328 111.1 41.6416 112.853 40.5727C113.887 39.927 114.944 39.2144 116 38.3904L115.326 33.2465ZM111.1 9.7758C110.808 12.9156 109.504 16.9239 108.29 20.2195C107.571 22.1347 106.784 24.0497 105.93 25.9871V25.7644C105.93 24.8737 105.93 22.3351 106.177 19.3957C106.358 17.2356 107.527 5.16624 110.404 5.16624C110.943 5.16624 111.235 5.70068 111.235 7.30399C111.235 7.90523 111.19 8.72916 111.1 9.7758Z" fill="black"/>
              </svg>
            </div>
          </Card.Header>
          <Card.Body className="px-5">
            <div className="d-flex justify-content-between align-items-center ticket-history">
              <Button variant="success rounded" disabled>Ticket used</Button>
              <button className="btn text-muted position-relative">Show Details</button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ borderRadius: "1rem" }} className="border-0 my-4">
          <Card.Header style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} className="bg-white pt-4 px-5">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small className="text-muted">Monday, 14 June 2020 - 02:00pm</small>
                <p style={{ fontSize: "24px" }} className="font-weight-bold">Avengers: End Game</p>
              </div>
              <svg width="85" height="43" viewBox="0 0 116 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.45166 42.7551C12.0706 42.7551 15.4872 40.9736 18.0721 39.1921C19.5557 38.1455 20.9493 36.9653 22.2755 35.607L19.3759 32.623C17.0382 34.8721 12.4078 38.0341 8.81131 38.0341C7.66493 38.0341 6.90069 37.6334 5.9791 36.0077C11.2164 34.5826 15.0826 30.6411 15.0826 26.9669C15.0826 23.6044 12.5202 21.3998 9.17095 21.3998C3.01203 21.3998 0 28.4366 0 33.4692C0 38.3904 2.80972 42.7551 8.45166 42.7551ZM5.46211 32.289C5.46211 30.3071 5.82175 25.653 9.66546 25.653C10.3847 25.653 10.9467 26.6106 10.9467 27.9467C10.9467 29.8172 7.5975 32.289 5.46211 32.289ZM25.9694 24.5842C30.1503 19.5515 34.8706 12.9601 34.8706 7.32626C34.8706 3.2957 34.1738 0 29.6108 0C23.5193 0 19.9453 16.0109 18.5067 24.7401C17.7874 29.1046 17.4053 32.6898 17.1581 35.2952C17.0232 36.8094 16.9333 38.1678 16.8884 39.3703C17.9673 40.0161 19.0911 40.5727 20.2825 41.0627C22.3279 41.9311 24.9354 42.7551 27.4754 42.7551H28.0374C28.5993 42.5324 29.1387 42.3096 29.6332 42.0647C30.5099 41.6416 31.4764 41.1295 31.9935 40.6173C36.2192 39.6598 39.3436 38.346 42.6479 35.3843L40.9171 31.71C38.5345 34.0705 36.3316 35.0725 34.1513 36.3418C35.927 33.625 36.3092 31.3092 36.3092 28.303C36.3092 24.6955 34.2188 21.3775 30.7122 21.3775C29.341 21.3775 28.0148 22.7581 26.329 24.8291L25.9694 24.5842ZM28.352 26.4547C30.7122 26.4547 31.2742 27.7686 31.2742 29.2382C31.2742 32.6453 29.9704 38.4796 26.8685 38.4796C25.9918 38.4796 25.0028 38.3014 24.1262 38.1233C23.6317 38.0119 23.1372 37.9006 22.6427 37.7447C22.6876 37.2325 22.7326 36.6759 22.8 36.0746C22.9124 35.028 23.0922 33.6696 23.362 32.0663C24.0138 28.1025 26.2616 26.4547 28.352 26.4547ZM30.5549 6.05697C30.1053 12.3811 25.812 18.1487 23.362 22.8249C24.0813 18.9057 26.9359 4.27551 29.4084 4.27551C30.4199 4.27551 30.5549 5.81202 30.5549 6.05697ZM40.9246 36.2527C41.1045 39.0808 41.1494 43 44.6334 43C46.7239 43 49.5336 38.7245 51.2868 35.1393C51.3543 37.3661 53.2874 39.5262 56.5017 39.5262C58.4123 39.5262 60.6152 38.7245 62.5932 37.4775V32.2444C61.9413 32.6675 61.312 33.0684 60.705 33.4023C59.6486 34.0037 58.3674 34.5381 57.4682 34.5381C55.0407 34.5381 54.4338 33.0906 54.4338 31.6654C54.4338 30.9752 54.5462 30.3294 54.7035 29.8172C54.771 29.5277 54.8608 29.2605 54.9732 28.9933C56.2994 26.0761 57.2435 24.8737 57.2435 23.2481C57.2435 22.1569 56.0972 21.3775 54.3664 21.3775C53.0626 21.3775 51.9387 22.1347 51.7589 22.9586L45.8473 36.9208L45.5325 36.943L46.4092 22.8473C46.3867 22.0679 45.8023 21.3775 44.7908 21.3775C44.6334 21.3775 44.521 21.3998 44.3637 21.4221L41.6664 21.8452C40.6998 22.001 40.52 23.7602 40.52 26.811C40.52 29.1714 40.6998 31.0865 40.8797 35.5401L40.9246 36.2527ZM73.9969 38.5018C73.9969 36.1859 72.6932 34.8944 70.1982 34.8944C67.2985 34.8944 66.0847 36.9876 66.0847 39.1476C66.0847 41.6862 67.5683 42.7551 69.7711 42.7551C73.9295 42.7551 73.9969 38.8804 73.9969 38.5018ZM91.7394 33.4915C89.7614 35.0948 86.3897 38.4796 84.2543 38.4796C83.3327 38.4796 83.1079 37.6334 83.1079 36.2972C83.1079 32.1776 86.1199 24.6287 86.1199 22.6468C86.1199 21.8674 85.7603 21.3775 84.5016 21.3775C83.1529 21.3775 80.8377 22.001 80.4106 23.5375C79.3317 27.9912 77.3536 34.5158 77.3536 38.2792C77.3536 40.9736 78.4101 42.7551 81.5345 42.7551C84.9961 42.7551 89.5815 39.9715 91.7394 38.0119V33.4915ZM81.6919 15.1202C81.6919 17.1688 82.9281 18.505 85.558 18.505C88.615 18.505 89.9187 16.523 89.9187 14.5189C89.9187 12.2921 88.1879 11.4014 86.0975 11.4014C82.7708 11.4014 81.6919 13.7618 81.6919 15.1202ZM100.536 25.9202C100.625 25.8312 100.603 32.2222 100.873 33.4247C100.536 34.2932 100.154 35.0502 99.7268 35.7406C99.0075 36.9208 97.9736 38.0565 96.8947 38.0565C94.8039 38.0565 94.3768 36.7427 94.3768 35.5624C94.3768 32.5785 96.5571 27.8354 100.536 25.9202ZM115.326 33.2465C114.427 34.0037 113.573 34.6717 112.741 35.2729C111.281 36.2972 109.617 37.2993 108.493 37.2993C107.301 37.2993 106.92 35.7406 106.92 34.0481C106.92 32.7121 107.301 30.9974 107.594 30.1957C110.718 22.7136 114.427 16.5676 115.214 8.15018C115.259 7.59348 115.281 7.05904 115.281 6.54686C115.281 3.13983 114.247 0 111.415 0C105.706 0 100.716 11.1786 100.446 22.6023C93.6126 23.2258 88.9821 29.7282 88.9821 35.4065C88.9821 39.1253 90.8253 42.7551 94.6916 42.7551C97.4337 42.7551 100.244 40.929 102.469 38.7913C103.907 42.2429 106.649 42.7328 107.482 42.7328C108.965 42.7328 111.1 41.6416 112.853 40.5727C113.887 39.927 114.944 39.2144 116 38.3904L115.326 33.2465ZM111.1 9.7758C110.808 12.9156 109.504 16.9239 108.29 20.2195C107.571 22.1347 106.784 24.0497 105.93 25.9871V25.7644C105.93 24.8737 105.93 22.3351 106.177 19.3957C106.358 17.2356 107.527 5.16624 110.404 5.16624C110.943 5.16624 111.235 5.70068 111.235 7.30399C111.235 7.90523 111.19 8.72916 111.1 9.7758Z" fill="black"/>
              </svg>
            </div>
          </Card.Header>
          <Card.Body className="px-5">
            <div className="d-flex justify-content-between align-items-center ticket-history">
              <Button variant="success rounded" disabled>Ticket used</Button>
              <button className="btn text-muted position-relative">Show Details</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  )
}