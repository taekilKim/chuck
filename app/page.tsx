const examples = ["파묘", "헤어질 결심", "기생충", "오징어 게임"];

export default function Home() {
  return (
    <main className="shell">
      <nav className="nav"><strong>Chuck</strong><span>Beta</span></nav>
      <section className="hero">
        <p className="eyebrow">CONTENTS, COMPRESSED.</p>
        <h1>안 봐도,<br />본 척할 수 있게.</h1>
        <p className="description">영화와 드라마의 줄거리부터 인물 관계, 복선, 반전, 결말과 해석까지. 알고 싶은 작품을 검색해보세요.</p>
        <form className="search">
          <input aria-label="작품 검색" placeholder="어떤 작품이 궁금하세요?" />
          <button type="submit">알아보기</button>
        </form>
        <div className="examples"><span>예를 들면</span>{examples.map((title) => <button key={title}>{title}</button>)}</div>
      </section>
      <section className="promise">
        <p>보고 싶은 콘텐츠와<br />알고 싶은 콘텐츠는 다르니까.</p>
        <div><span>01</span><strong>전체 줄거리</strong></div>
        <div><span>02</span><strong>인물과 관계</strong></div>
        <div><span>03</span><strong>복선 · 반전 · 장치</strong></div>
        <div><span>04</span><strong>결말과 해석</strong></div>
      </section>
    </main>
  );
}
