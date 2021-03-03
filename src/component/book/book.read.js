import React, { useEffect, useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import { getBookToRead } from "../../api/index";
export const ReadBook = (props) => {
  const [book, setBook] = useState({});
  const file =
    "https://cors.bridged.cc/https://storage.googleapis.com/e-library-705ec.appspot.com/Elon%20Musk%20Tesla%2C%20SpaceX%2C%20and%20the%20Quest%20for%20a%20Fantastic%20Future%20by%20Ashlee%20Vance%20(z-lib.org).pdf";

  const orderId = props.match.params.orderId;
  const viewDiv = useRef(null);
  useEffect(() => {
    getBookToRead(localStorage.getItem("_id"), orderId).then((response) => {
      if (response.data.data) {
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
                                  ${error.response.data.message}</div>`,
              {
                html: true,
                position: "top-right",
                effect: "slide",
              }
            );
          });
      }
    });
  }, []);
  return <div className="webviewer" ref={viewDiv}></div>;
};
