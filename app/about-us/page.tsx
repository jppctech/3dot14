import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"
  import { Star, Box, Sun, Target, ArrowRight, Check } from "lucide-react"
  
 const  Aboutus = () => {
    return (
      <div className="w-full items-center justify-center flex flex-col">
        <div className="flex flex-col">
        {/* Who We Are Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tight mb-4">WHO WE ARE</h1>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-xl text-gray-600">
                  Lorem ipsum dolor amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button >Learn More</Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <Box className="w-8 h-8 black" />
                    <CardTitle className="text-sm">Remote team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">Work with talented people across the globe</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Sun className="w-8 h-8 black" />
                    <CardTitle className="text-sm">Creative solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">Innovative approaches to challenges</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Star className="w-8 h-8 black" />
                    <CardTitle className="text-sm">Quality focused</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">Delivering excellence in every project</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Target className="w-8 h-8 black" />
                    <CardTitle className="text-sm">Goal oriented</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">Focused on achieving results</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
  
        {/* Team Image Section */}
        <section className="py-12 bg-gray-50 w-full">
          <div className="container px-4 md:px-6">
            <img
              alt="Team collaboration"
              className="rounded-lg object-cover w-full h-[400px]"
              src="/about-us.jpg"
            />
          </div>
        </section>
  
        {/* What We Do Offer Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold black mb-8">WHAT WE DO OFFER</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Nequient Metus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Comprehensive marketing solutions for growing businesses</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Etiam Commodi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Strategic planning and implementation services</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Lorem Marks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Innovative digital solutions for modern challenges</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Aspernatur Commodi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Expert consultation and guidance</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Velit Doloremque</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">Custom development and design services</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dolori Architecto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">End-to-end project management solutions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  
        {/* Portfolio Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold black mb-8">WHAT WE'VE DONE</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <img
                  key={item}
                  alt={`Portfolio item ${item}`}
                  className="rounded-lg object-cover w-full h-[300px]"
                  src="paxel.jpg"
                />
              ))}
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold black mb-8">WHAT THEY ARE SAYING ABOUT US</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <Card key={item}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 fill-orange-400 text-orange-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        alt="Testimonial avatar"
                        className="rounded-full"
                        height="40"
                        src="/team-1.jpg"
                        width="40"
                      />
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <p className="text-sm text-gray-500">CEO, Company</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
  
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold black mb-8">FREQUENTLY ASKED QUESTIONS</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How to download and register?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How to create your paypal account?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How to link your paypal and bank account?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold black mb-8">OUR HARDWORKING TEAM</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { name: "David Smith", role: "Chief Executive Officer" },
                { name: "Sarah Johnson", role: "Product Designer" },
                { name: "Michael Anderson", role: "CTO" },
                { name: "Emily Davis", role: "Marketing Director" },
              ].map((member) => (
                <Card key={member.name}>
                  <CardContent className="pt-6">
                    <img
                      alt={member.name}
                      className="rounded-lg object-cover w-full h-[200px] mb-4"
                      src="/blog-2.webp"
                    />
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        {/* Blog Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold black mb-8">RECENT BLOG POSTS</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((post) => (
                <Card key={post}>
                  <img
                    alt={`Blog post ${post}`}
                    className="w-full h-[200px] object-cover"
                    src="blog-3.webp"
                  />
                  <CardHeader>
                    <CardTitle>Blog Post Title {post}</CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="black">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      </div>
    )
  }

  export default Aboutus