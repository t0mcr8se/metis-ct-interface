export default function Layer3Quest({ id }: { id: string }) {
  return (
    <a href={`https://layer3.xyz/quests/${id}`} target="_blank">
      <iframe
        src={`https://layer3.xyz/quests/embedded/card/${id}`}
        data-quest-id={id}
        width="100%"
        height="100%"
        scrolling="no"
        style={{
          minWidth: 300,
          height: 122,
          border: "none",
          borderRadius: 8,
          backgroundColor: "rgb(33, 41, 56)",
          pointerEvents: "none",
        }}
      ></iframe>
    </a>
  );
}
