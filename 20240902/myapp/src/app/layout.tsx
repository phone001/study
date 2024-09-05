// medata, 페이지의 헤더의 내용에 포함시킬 메타데이터
import type { Metadata } from "next";
// font 적용
import { Inter } from "next/font/google";
// css스타일 가져온 것
//import "./globals.css";

// 폰트 적용
// Inter 폰트 생성하면서 문자 집한 정해준것
const inter = Inter({ subsets: ["latin"] });

// 메타데이터 지정
export const metadata: Metadata = {
  title: "Create Next App", // 페이지의 제목으로 탭에 표시된다
  description: "Generated by create next app",// 페이지의 설명
};

// 처음에 전역적으로 사용할 레이아웃
// 이 레이아웃은 제거하면 안된다.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // react node 타입
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        여기는 루트 레이아웃
        {children}</body>
    </html>
  );
}
