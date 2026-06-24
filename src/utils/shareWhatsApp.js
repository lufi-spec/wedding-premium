const shareWhatsApp = (nama) => {

  const url = `${window.location.origin}/?to=${encodeURIComponent(nama)}`;

  const message = `Assalamu’alaikum Warahmatullahi Wabarakatuh

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i *${nama}* untuk menghadiri acara pernikahan kami.

Berikut link undangan kami, untuk info lengkap dari acara dapat mengunjungi :

${url}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu kepada kami.

Mohon maaf perihal undangan hanya dibagikan melalui pesan ini.

Terima kasih atas perhatian dan doa restunya.

Wassalamu’alaikum Warahmatullahi Wabarakatuh`;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(message)}`
  );

};

export default shareWhatsApp;