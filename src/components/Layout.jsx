import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import { contactData } from "../data/siteData";

export default function Layout({ children, activeId = "hero", withContactModals = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  return (
    <>
      <Header
        activeId={activeId}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((current) => !current)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      {children({
        openWechat: () => setModalType("wechat"),
        openQQ: () => setModalType("qq"),
      })}
      <Footer />
      {withContactModals ? (
        <>
          <Modal
            title="微信二维码"
            image={contactData.wechatQr}
            alt="WeChat QR Code"
            description="扫一扫添加我的微信"
            isOpen={modalType === "wechat"}
            onClose={() => setModalType(null)}
          />
          <Modal
            title="QQ 二维码"
            image={contactData.qqQr}
            alt="QQ QR Code"
            description="扫一扫添加我的 QQ"
            isOpen={modalType === "qq"}
            onClose={() => setModalType(null)}
          />
        </>
      ) : null}
    </>
  );
}
