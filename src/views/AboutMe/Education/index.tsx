import { useState } from "react";
import { ABOUT } from "../aboutMeData";
import {
  Certificate,
  CertificateContainer,
  CertificateInstructions,
  CourseAdditional,
  CourseDescription,
  CourseInfo,
  CourseOverview,
  CourseTitle,
  EducationContainer,
  EducationItem,
  EducationList,
  EducationName,
  GridDivider,
  TechLogo,
  Title,
} from "./styled";
import ImageViewer from "../../../common/ImageViewer";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsLanguageEN } from "../../../slices/languageSlice";
import { Screenshot } from "../../../types/types";

const Education: React.FC = () => {
  const theme = useTheme();
  const isLanguageEN = useSelector(selectIsLanguageEN);
  const initialImageState: Screenshot = {
    imageUrl: "",
    alt: {
      en: "",
      pl: "",
    },
  };

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<Screenshot | null>(
    initialImageState
  );

  const openImageViewer = (imageUrl: string, alt: string) => {
    setCurrentImage({ imageUrl: imageUrl, alt: { en: alt, pl: alt } });
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(null);
    setIsViewerOpen(false);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <EducationContainer>
      <Title>{isLanguageEN ? "Education" : "Edukacja"} 🎓</Title>
      <EducationList>
        {ABOUT.education.map((course) => (
          <EducationItem
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            key={course.name}
            background={theme.colors.aboutMePage.education.listItemBG}
          >
            <GridDivider>
              <CourseOverview>
                <EducationName>
                  {isLanguageEN ? "Course" : "Kurs"}
                </EducationName>
                <CourseTitle>{course.name}</CourseTitle>
                <CourseInfo>
                  <CourseAdditional>
                    <strong>
                      {isLanguageEN ? "Date of issue:" : "Data ukończenia:"}
                    </strong>{" "}
                    {course.date}
                  </CourseAdditional>
                  <CourseAdditional>
                    <strong>
                      {isLanguageEN ? "Organization:" : "Organizator:"}
                    </strong>{" "}
                    {course.organization}
                  </CourseAdditional>
                </CourseInfo>
                <CourseDescription>
                  {isLanguageEN ? course.content.EN : course.content.PL}
                </CourseDescription>
              </CourseOverview>
              {course.certificate && (
                <CertificateContainer>
                  <Certificate
                    src={course.certificate.url}
                    alt={`${
                      isLanguageEN
                        ? "Certificate of completion:"
                        : "Certyfikat ukończenia:"
                    } ${course.name}`}
                    onClick={() =>
                      openImageViewer(
                        course.certificate!.url!,
                        course.certificate!.alt![isLanguageEN ? "en" : "pl"]
                      )
                    }
                  />
                  <CertificateInstructions>
                    {isLanguageEN
                      ? "Click on the certificate to view it in full size"
                      : "Kliknij na certyfikat aby wyświetlić pełny rozmiar"}{" "}
                    🔍
                  </CertificateInstructions>
                </CertificateContainer>
              )}
              {course.techLogo && (
                <TechLogo
                  src={course.techLogo}
                  alt={course.name}
                  title={course.name}
                />
              )}
            </GridDivider>
          </EducationItem>
        ))}
      </EducationList>
      {isViewerOpen && currentImage && (
        <ImageViewer
          isCertificates={true}
          image={{
            imageUrl: currentImage.imageUrl,
            alt: currentImage.alt,
          }}
          onClose={closeImageViewer}
        />
      )}
    </EducationContainer>
  );
};

export default Education;
