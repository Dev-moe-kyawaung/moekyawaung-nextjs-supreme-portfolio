'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Github, Mail, Linkedin, ChevronRight, 
  Code2, Server, Database, Smartphone 
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-700">
              🚀 Senior Full Stack Engineer
            </div>
            
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
              >
                Moe Kyaw Aung
              </motion.h1>
              <p className="text-2xl font-medium text-muted-foreground mt-4">
                Building scalable web applications with Next.js 14 & TypeScript
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl h-14 px-8 text-lg font-semibold">
                <Link href="#projects" className="flex items-center gap-2">
                  Featured Projects
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-14 px-8 text-lg">
                <Link href="https://github.com/moekyawaung" target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="justify-self-center"
          >
            <Card className="w-80 h-80 border-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl shadow-2xl border-white/20">
              <CardContent className="flex items-center justify-center h-full p-8">
                <Avatar className="w-64 h-64 border-4 border-white/20 shadow-2xl">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-4xl font-bold text-white">
                    MKA
                  </AvatarFallback>
                </Avatar>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            className="text-center space-y-4"
          >
            <h2 className="text-5xl font-black bg-gradient-to-r from-foreground via-orange-600 to-red-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Production-ready applications showcasing modern Next.js patterns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce SaaS",
                description: "Full-stack Next.js 14 commerce platform with Stripe, Auth0, real-time inventory",
                tech: ["Next.js 14", "TypeScript", "Prisma", "Tailwind", "Stripe"],
                github: "https://github.com/moekyawaung/ecommerce-next",
                demo: "https://ecommerce.moekyawaung.com"
              },
              {
                title: "AI Analytics Dashboard",
                description: "Real-time dashboard with AI insights, shadcn/ui, and server actions",
                tech: ["Next.js", "shadcn/ui", "Recharts", "Vercel AI", "PostgreSQL"],
                github: "https://github.com/moekyawaung/ai-dashboard",
                demo: "https://dashboard.moekyawaung.com"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ margin: "-100px" }}
                className="group"
              >
                <Card className="h-full border-0 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-4 bg-gradient-to-br from-white/60 to-slate-100/60 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-xl">
                  <CardHeader className="p-0">
                    <div className="h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                      <div className="h-full w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-2xl font-black mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-lg mb-6 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={project.demo} target="_blank">
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
