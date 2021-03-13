import React, { useEffect, useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import { getBookToRead } from "../../api/index";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import "./audio.custom.css";
import { Spinner } from "react-bootstrap";

export const ReadBook = (props) => {
  const orderId = props.match.params.orderId;
  const [fileType, setFileType] = useState("");
  const [book, setBook] = useState({});
  const viewDiv = useRef(null);
  useEffect(() => {
    getBookToRead(localStorage.getItem("_id"), orderId)
      .then((response) => {
        if (
          response.data.data &&
          response.data.data.bookId.fileType === "pdf"
        ) {
          setFileType("pdf");
          WebViewer(
            {
              path: "/lib",
              initialDoc: `https://cors.bridged.cc/${response.data.data.bookId.file}`,
            },
            viewDiv.current
          )
            .then((instance) => {
              const { docViewer, Annotations } = instance;
              const annotManager = docViewer.getAnnotationManager();
              const Feature = instance.Feature;
              instance.disableFeatures([Feature.Download, Feature.Print]);
              docViewer.on("documentLoaded", () => {
                const rectangleAnnot = new Annotations.RectangleAnnotation();
                rectangleAnnot.PageNumber = 1;
                annotManager.addAnnotation(rectangleAnnot);
                // need to draw the annotation otherwise it won't show up until the page is refreshed
                annotManager.redrawAnnotation(rectangleAnnot);
              });
            })
            .catch((error) => {
              return Alert.error(
                `<div role="alert">
                                 <i class="fa fa-times-circle" aria-hidden="true"></i> ${error.response.data.message}</div>`,
                {
                  html: true,
                  position: "top-right",
                  effect: "slide",
                }
              );
            });
        } else {
          setFileType("audio");
          setBook(response.data.data.bookId);
        }
      })
      .catch((error) => {
        return Alert.error(
          `<div role="alert">
                                 <i class="fa fa-times-circle" aria-hidden="true"></i> ${error.response.data.message}</div>`,
          {
            html: true,
            position: "top-right",
            effect: "slide",
          }
        );
      });
  }, [orderId]);
  const user = useSelector((state) => {
    return state.login.data;
  });
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Alert stack={{ limit: 3 }} />
      {fileType !== "" ? (
        fileType === "pdf" ? (
          <div className="webviewer" ref={viewDiv}></div>
        ) : (
          <div style={{ marginTop: 140, marginBottom: 50 }}>
            <Image
              src={book.images}
              style={{
                width: 400,
                marginLeft: "40%",
                marginRight: "40%",
                marginBottom: 10,
              }}
            />
            <div
              style={{
                marginLeft: "42%",
                marginRight: "40%",
                marginBottom: 10,
                width: "100%",
              }}
            >
              <ul style={{ listStyle: "none" }}>
                <li style={{ marginLeft: 10, marginRight: 10 }}>
                  {book.book_name}
                </li>
                <li style={{ marginLeft: 130, marginRight: 150 }}>
                  {book.authors ? book.authors[0].authorName : null}
                </li>
              </ul>
            </div>
            <div style={{ backgroundColor: "#29bed2" }}>
              <AudioPlayer
                autoPlay
                src="https://storage.googleapis.com/e-library-705ec.appspot.com/the-adventures-of-huckleberry-finn-001-notice.97.mp3"
                customIcons={{
                  play: <FontAwesomeIcon icon={faPlayCircle} color="#64ccdb" />,
                  pause: (
                    <FontAwesomeIcon icon={faPauseCircle} color="#64ccdb" />
                  ),
                  volume: <FontAwesomeIcon icon={faVolumeUp} color="#64ccdb" />,
                  volumeMute: (
                    <FontAwesomeIcon icon={faVolumeMute} color="#64ccdb" />
                  ),
                }}
              />
            </div>
          </div>
        )
      ) : (
        <Spinner
          animation="border"
          variant="info"
          style={{
            width: 200,
            height: 200,
            marginTop: "5%",
            marginLeft: "45%",
            marginRight: "45%",
          }}
        />
      )}
    </div>
  );
};
