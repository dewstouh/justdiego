"use client"

import { motion } from "framer-motion"
import { Heart, MessageCircle, Repeat2, Share } from "lucide-react"

const posts = [
    {
        id: 1,
        content:
            "Just shipped a new microservice that handles 10k requests/second with sub-10ms latency. The secret? Proper connection pooling and smart caching strategies. 🚀",
        timestamp: "2h",
        likes: 234,
        retweets: 45,
        replies: 12,
    },
    {
        id: 2,
        content:
            "Hot take: Your database is probably not the bottleneck. It's usually the N+1 queries you're not seeing. Profile first, optimize second. 📊",
        timestamp: "1d",
        likes: 567,
        retweets: 89,
        replies: 34,
    },
    {
        id: 3,
        content:
            "Building developer tools is like designing for yourself, but 10x more critical. Every millisecond of friction compounds across thousands of daily interactions. ⚡",
        timestamp: "3d",
        likes: 892,
        retweets: 156,
        replies: 67,
    },
]

export default function PostsSection() {
    return (
        <section id="now" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">LATEST UPDATES</h2>
                    <p className="text-xl text-gray-400">Real-time thoughts from @justdiego</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
                                    D
                                </div>
                                <div>
                                    <div className="font-semibold">Diego Rodríguez</div>
                                    <div className="text-gray-400 text-sm">@justdiego · {post.timestamp}</div>
                                </div>
                            </div>

                            <p className="text-gray-200 leading-relaxed mb-4">{post.content}</p>

                            <div className="flex items-center justify-between text-gray-400 text-sm">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 hover:text-red-400 transition-colors"
                                >
                                    <Heart size={16} />
                                    {post.likes}
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                                >
                                    <MessageCircle size={16} />
                                    {post.replies}
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 hover:text-green-400 transition-colors"
                                >
                                    <Repeat2 size={16} />
                                    {post.retweets}
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="hover:text-white transition-colors"
                                >
                                    <Share size={16} />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
