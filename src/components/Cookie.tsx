import CookieConsent from "react-cookie-consent";

export const Cookie = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Akceptuję"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
        >
            Ta strona korzysta z plików cookie, aby zapewnić najlepszą jakość usług.{" "}
            <span style={{ fontSize: "10px" }}>
                Możesz zmienić swoje ustawienia plików cookie w dowolnym momencie.
            </span>
        </CookieConsent>
    )
}
