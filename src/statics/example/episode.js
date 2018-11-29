import episodePoster from './files/poster.jpg'

export default (extension = {}) => ({
  show: {
    poster: "http://static1.squarespace.com/static/51597313e4b0fc0d946daac9/t/5bcc50838165f55241f6b7df/1540116614652/1500w/Glyph_logo_new1400.png",
    summary: "Здесь мы общаемся с теми, кто пишет, редактирует, снимает фото, видео и руководит созданием контента.",
    title: "GLPH.MEDIA",
    url: "http://vigorousspace.co/glph/"
  },
  theme: {
    main: '#1f1f1f',
    highlight: '#bfbdbd'
  },
  poster: "http://static1.squarespace.com/static/51597313e4b0fc0d946daac9/t/5bcc50838165f55241f6b7df/1540116614652/1500w/Glyph_logo_new1400.png",
  publicationDate: "Sun, 09 Sep 2018 19:15:00 +0000",
  reference: {
    base: "http://localhost:3000/static/podlove"
  },
  title: "1: Как работает редакция нового типа",
  subtitle: "Гость — Алина Тестова — основатель GLPH.Media",
  audio: [
    {
      mimeType: "audio/mpeg",
      size: "53179148",
      title: "MP3",
      url: "https://s3.eu-west-3.amazonaws.com/glph.media/Episodes/GLPH+-+1+-+09_09_2018.mp3"
    },
  ],
  runtime: {
    language: 'ru'
  },
  ...extension
})
