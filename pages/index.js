import Head from "next/head";
import Image from "next/image";
import { createClient } from "../prismicio";
import styles from "../styles/Home.module.css";

export default function Home({ page, posts }) {
	let bi = page.backgroundImage;
	console.log("bi:", bi);
	// const bkgImgUrl = new URL({ bi });

	console.log("bi:", bi);
	console.log("bi:", bi);

	return (
		<div className="container mx-auto bg-[bkgImgUrl]">
			<h1 className="text-3xl font-bold underline">page title: {page.title}</h1>
			<h3 className="text-xl font-bold">
				page welcome text: {page.welcomeText}
			</h3>
			<br></br>
			<h2>posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.uid}>{post.title}</li>
				))}
			</ul>
		</div>

		// <div className={styles.container}>
		//   <Head>
		//     <title>Create Next App</title>
		//     <meta name="description" content="Generated by create next app" />
		//     <link rel="icon" href="/favicon.ico" />
		//   </Head>

		//   <main className={styles.main}>
		//     <h1 className={styles.title}>
		//       Welcome to <a href="https://nextjs.org">Next.js!</a>
		//     </h1>

		//     <p className={styles.description}>
		//       Get started by editing{' '}
		//       <code className={styles.code}>pages/index.js</code>
		//     </p>

		//     <div className={styles.grid}>
		//       <a href="https://nextjs.org/docs" className={styles.card}>
		//         <h2>Documentation &rarr;</h2>
		//         <p>Find in-depth information about Next.js features and API.</p>
		//       </a>

		//       <a href="https://nextjs.org/learn" className={styles.card}>
		//         <h2>Learn &rarr;</h2>
		//         <p>Learn about Next.js in an interactive course with quizzes!</p>
		//       </a>

		//       <a
		//         href="https://github.com/vercel/next.js/tree/canary/examples"
		//         className={styles.card}
		//       >
		//         <h2>Examples &rarr;</h2>
		//         <p>Discover and deploy boilerplate example Next.js projects.</p>
		//       </a>

		//       <a
		//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
		//         className={styles.card}
		//       >
		//         <h2>Deploy &rarr;</h2>
		//         <p>
		//           Instantly deploy your Next.js site to a public URL with Vercel.
		//         </p>
		//       </a>
		//     </div>
		//   </main>

		//   <footer className={styles.footer}>
		//     <a
		//       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Powered by{' '}
		//       <span className={styles.logo}>
		//         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
		//       </span>
		//     </a>
		//   </footer>
		// </div>
	);
}

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	const page = await client.getSingle("home-page");

	const posts = await client.getAllByType("blog-post");
	// , {
	// 	orderings: [{ field: "blog-post.date", direction: "desc" }],
	// });

	console.log("page uid:" + page.uid);
	return {
		props: {
			page,
			posts,
		},
	};
}
